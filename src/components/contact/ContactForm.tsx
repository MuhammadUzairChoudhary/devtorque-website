"use client";

import { CircleCheck } from "lucide-react";
import { startTransition, useActionState, useRef, useState } from "react";
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
  const formRef = useRef<HTMLFormElement>(null);

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
    if (!name) nextErrors.name = "Please enter your name.";
    if (!email) {
      nextErrors.email = "Please enter your email address.";
    } else if (!emailPattern.test(email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!message) nextErrors.message = "Please tell us a little about what you have in mind.";

    setErrors(nextErrors);
    const firstInvalidField = Object.keys(nextErrors)[0];
    if (firstInvalidField) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalidField}"]`)?.focus();
      return;
    }

    startTransition(() => formAction(data));
  }

  if (state.success) {
    return (
      <div
        className="flex min-h-[480px] flex-col items-center justify-center px-6 py-16 text-center"
        role="status"
      >
        <CircleCheck aria-hidden="true" className="text-accent" size={44} strokeWidth={1.75} />
        <h2 className="mt-7 text-card-title text-text-primary">Request received</h2>
        <p className="mt-3 max-w-[38ch] text-card-description text-text-secondary">{state.message}</p>
      </div>
    );
  }

  return (
    <form
      className="pt-1"
      noValidate
      onSubmit={handleSubmit}
      ref={formRef}
    >
      {state.message ? (
        <p className="mb-6 rounded-[var(--radius-sm)] border border-error/30 bg-error/5 px-4 py-3 text-sm font-medium text-error" role="alert">
          {state.message}
        </p>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField error={errors.name} htmlFor="contact-name" label="Name" required>
          <Input aria-describedby={errors.name ? "contact-name-error" : undefined} autoComplete="name" id="contact-name" invalid={Boolean(errors.name)} name="name" onChange={() => clearError("name")} placeholder="Your name" required type="text" />
        </FormField>
        <FormField error={errors.email} htmlFor="contact-email" label="Email" required>
          <Input aria-describedby={errors.email ? "contact-email-error" : undefined} autoComplete="email" id="contact-email" invalid={Boolean(errors.email)} name="email" onChange={() => clearError("email")} placeholder="you@company.com" required type="email" />
        </FormField>
        <FormField htmlFor="contact-company" label="Company">
          <Input autoComplete="organization" id="contact-company" name="company" placeholder="Company name" type="text" />
        </FormField>
        <FormField htmlFor="contact-topic" label="Project type">
          <Select id="contact-topic" name="topic">
            <option value="">Select a topic</option>
            {topics.map((topic) => <option key={topic} value={topic}>{topic}</option>)}
          </Select>
        </FormField>
      </div>

      <FormField className="mt-5" error={errors.message} htmlFor="contact-message" label="What should we know?" required>
        <Textarea className="!min-h-[88px]" aria-describedby={errors.message ? "contact-message-error" : undefined} id="contact-message" invalid={Boolean(errors.message)} name="message" onChange={() => clearError("message")} placeholder="The problem, goal, timing, or constraints that matter..." required rows={3} />
      </FormField>

      <div className="mt-6 flex justify-end">
        <Button className="w-full shrink-0 sm:w-auto" disabled={isPending} size="compact" type="submit" variant="accent">
          {isPending ? "Sending..." : "Send project details"}
        </Button>
      </div>
    </form>
  );
}
