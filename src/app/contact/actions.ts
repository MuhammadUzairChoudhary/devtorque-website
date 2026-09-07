"use server";

import tls from "tls";

export interface ContactFormState {
  success: boolean;
  message: string;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const recipients = [
  "hello@dev-torque.com",
  "uzair@dev-torque.com",
  "ali@dev-torque.com"
];

/* ------------------------------------------------------------------ */
/* Raw SMTP over implicit TLS (port 465)                              */
/* ------------------------------------------------------------------ */

function b64(str: string): string {
  return Buffer.from(str, "utf-8").toString("base64");
}

function expectCode(
  stream: tls.TLSSocket,
  expected: number,
  timeoutMs = 15000
): Promise<string> {
  return new Promise((resolve, reject) => {
    let buf = "";
    let done = false;

    const timer = setTimeout(() => {
      if (!done) {
        done = true;
        stream.removeListener("data", onData);
        console.error(`[SMTP] Timeout waiting for ${expected}. Buffer: ${JSON.stringify(buf)}`);
        reject(new Error(`SMTP timeout waiting for ${expected}. Got: ${buf.trim()}`));
      }
    }, timeoutMs);

    function onData(chunk: Buffer) {
      if (done) return;
      buf += chunk.toString();

      while (buf.includes("\r\n")) {
        const idx = buf.indexOf("\r\n");
        const line = buf.substring(0, idx);
        buf = buf.substring(idx + 2);

        const match = line.match(/^(\d{3})([- ])/);
        if (!match) continue;

        const code = parseInt(match[1], 10);
        const separator = match[2];

        console.log(`[SMTP] <<< ${line}`);

        if (code !== expected) {
          done = true;
          clearTimeout(timer);
          stream.removeListener("data", onData);
          reject(new Error(`SMTP ${code}: ${line}`));
          return;
        }

        if (separator === " ") {
          done = true;
          clearTimeout(timer);
          stream.removeListener("data", onData);
          resolve(line);
          return;
        }
      }
    }

    stream.on("data", onData);
  });
}

function sendCmd(stream: tls.TLSSocket, line: string, expected = 250) {
  console.log(`[SMTP] >>> ${line}`);
  stream.write(line + "\r\n");
  return expectCode(stream, expected);
}

async function smtpSendMail(
  host: string,
  port: number,
  user: string,
  pass: string,
  from: string,
  to: string[],
  subject: string,
  html: string,
  replyTo?: string
): Promise<void> {
  const stream = tls.connect(port, host, {
    servername: host,
    rejectUnauthorized: true
  });

  await new Promise<void>((resolve, reject) => {
    stream.once("secureConnect", resolve);
    stream.once("error", (err) => reject(new Error(`TLS failed: ${err.message}`)));
    stream.setTimeout(15000, () => {
      stream.destroy();
      reject(new Error("TLS timed out"));
    });
  });

  await expectCode(stream, 220);
  await sendCmd(stream, "EHLO localhost", 250);
  await sendCmd(stream, "AUTH LOGIN", 334);
  await sendCmd(stream, b64(user), 334);
  await sendCmd(stream, b64(pass), 235);
  await sendCmd(stream, `MAIL FROM:<${from}>`);
  for (const r of to) {
    await sendCmd(stream, `RCPT TO:<${r}>`);
  }
  await sendCmd(stream, "DATA", 354);

  const headers = [
    `From: DevTorque <${from}>`,
    `To: ${to.join(", ")}`,
    `Subject: ${subject}`,
    `Date: ${new Date().toUTCString()}`,
    `MIME-Version: 1.0`,
    `Content-Type: text/html; charset=UTF-8`,
    replyTo ? `Reply-To: ${replyTo}` : null
  ]
    .filter(Boolean)
    .join("\r\n");

  console.log(`[SMTP] >>> [message body]`);
  stream.write(headers + "\r\n\r\n" + html + "\r\n.\r\n");
  await expectCode(stream, 250);

  stream.write("QUIT\r\n");
  try { await expectCode(stream, 221); } catch { /* ok */ }

  stream.destroy();
}

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br/>");
}

function buildHtml(name: string, email: string, company: string, topic: string, message: string): string {
  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"></head>
<body style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:20px">
<h2 style="color:#333">New Contact Form Submission</h2>
<table style="width:100%;border-collapse:collapse">
<tr><td style="padding:8px 0;font-weight:bold;color:#555">Name:</td><td style="padding:8px 0">${esc(name)}</td></tr>
<tr><td style="padding:8px 0;font-weight:bold;color:#555">Email:</td><td style="padding:8px 0"><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
${company ? `<tr><td style="padding:8px 0;font-weight:bold;color:#555">Company:</td><td style="padding:8px 0">${esc(company)}</td></tr>` : ""}
${topic ? `<tr><td style="padding:8px 0;font-weight:bold;color:#555">Project Type:</td><td style="padding:8px 0">${esc(topic)}</td></tr>` : ""}
<tr><td style="padding:8px 0;font-weight:bold;color:#555;vertical-align:top">Message:</td><td style="padding:8px 0">${esc(message)}</td></tr>
</table></body></html>`;
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const topic = String(formData.get("topic") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { success: false, message: "Please fill in all required fields and try again." };
  }

  if (!emailPattern.test(email)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  try {
    await smtpSendMail(
      process.env.SMTP_HOST!,
      Number(process.env.SMTP_PORT) || 465,
      process.env.SMTP_USER!,
      process.env.SMTP_PASS!,
      process.env.SMTP_FROM!,
      recipients,
      `New enquiry from ${name}${topic ? ` — ${topic}` : ""}`,
      buildHtml(name, email, company, topic, message),
      email
    );

    return {
      success: true,
      message: "Thanks. We've received your message and will get back to you shortly."
    };
  } catch (error) {
    console.error("Failed to send contact form email:", error);
    return {
      success: false,
      message: "Something went wrong while sending your message. Please try again later."
    };
  }
}
