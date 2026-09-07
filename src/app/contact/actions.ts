"use server";

export interface ContactFormState {
  success: boolean;
  message: string;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return {
      success: false,
      message: "Please fill in all required fields and try again."
    };
  }

  if (!emailPattern.test(email)) {
    return {
      success: false,
      message: "Please enter a valid email address."
    };
  }

  // TODO: Deliver the enquiry to DevTorque (e.g., Resend, a CRM, or a
  // database write) before returning success.

  return {
    success: true,
    message: "Thanks. We've received your message and will get back to you shortly."
  };
}