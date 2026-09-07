"use client";

import { CircleCheck } from "lucide-react";
import { startTransition, useActionState, useState } from "react";
import { submitContactForm, type ContactFormState } from "@/app/contact/actions";
import { Button } from "@/components/ui/Button";
import { FormField } from "@/components/ui/FormField";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";

const topics = [
  "AI Voice Agents",
  "AI Automation",
  "Website Development",
  "Web App Development",
  "UI/UX Design",
  "Something Else"
] as const;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialState: ContactFormState = { success: false, message: "" };

type FieldName = "name" | "email" | "company" | "topic" | "message";
type FieldErrors = Partial<Record<FieldName, string>>;

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);
  const [errors, setErrors] = useState<FieldErrors>({});

  function clearError(field: FieldName) {
    setErrors((current) => (current[field] ? { ...current, [field]: undefined } : current));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const nextErrors: FieldErrors = {};
    if (!name) {
      nextErrors.name = "Please enter your name.";
    }
    if (!email) {
      nextErrors.email = "Please enter your email address.";
    } else if (!emailPattern.test(email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!message) {
      nextErrors.message = "Please tell us a little about what you have in mind.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    startTransition(() => {
      formAction(data);
    });
  }

  if (state.success) {
    return (
      <div
        className="flex min-h-[480px] flex-col items-center justify-center rounded-[var(--radius-lg)] bg-surface-muted px-6 py-16 text-center"
        role="status"
      >
        <CircleCheck aria-hidden="true" className="text-accent" size={40} strokeWidth={1.75} />
        <p className="mt-6 max-w-[34ch] text-body text-text-primary">{state.message}</p>
      </div>
    );
  }

  return (
    <form className="grid gap-6" noValidate onSubmit={handleSubmit}>
      {state.message ? (
        <p className="rounded-[var(--radius-sm)] border border-error/30 bg-error/5 px-4 py-3 text-sm font-medium text-error" role="alert">
          {state.message}
        </p>
      ) : null}

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField error={errors.name} htmlFor="contact-name" label="Name" required>
          <Input
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            autoComplete="name"
            id="contact-name"
            invalid={Boolean(errors.name)}
            name="name"
            onChange={() => clearError("name")}
            placeholder="Your name"
            required
            type="text"
          />
        </FormField>

        <FormField error={errors.email} htmlFor="contact-email" label="Email" required>
          <Input
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            autoComplete="email"
            id="contact-email"
            invalid={Boolean(errors.email)}
            name="email"
            onChange={() => clearError("email")}
            placeholder="you@company.com"
            required
            type="email"
          />
        </FormField>
      </div>

      <FormField htmlFor="contact-company" label="Company">
        <Input
          autoComplete="organization"
          id="contact-company"
          name="company"
          placeholder="Company name"
          type="text"
        />
      </FormField>

      <FormField htmlFor="contact-topic" label="What can we help with?">
        <Select id="contact-topic" name="topic">
          <option value="">Select a topic</option>
          {topics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </Select>
      </FormField>

      <FormField error={errors.message} htmlFor="contact-message" label="Message" required>
        <Textarea
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          id="contact-message"
          invalid={Boolean(errors.message)}
          name="message"
          onChange={() => clearError("message")}
          placeholder="Tell us a little about what you have in mind..."
          required
          rows={6}
        />
      </FormField>

      <div>
        <Button className="w-full sm:w-auto" disabled={isPending} type="submit" variant="primary">
          {isPending ? "Sending..." : "Send your request"}
        </Button>
      </div>
    </form>
  );
}