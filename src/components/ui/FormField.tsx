import { cn } from "@/lib/utils";

interface FormFieldProps {
  children: React.ReactNode;
  className?: string;
  error?: string;
  hint?: string;
  htmlFor: string;
  label: string;
  required?: boolean;
}

export function FormField({
  children,
  className,
  error,
  hint,
  htmlFor,
  label,
  required
}: FormFieldProps) {
  return (
    <div className={cn("grid gap-2", className)}>
      <label className="font-[var(--font-geist)] text-base font-medium text-text-primary" htmlFor={htmlFor}>
        {label}
        {required ? (
          <span aria-hidden="true" className="text-accent">
            {" "}
            *
          </span>
        ) : null}
      </label>
      {children}
      {error ? (
        <p className="text-sm font-medium text-error" id={`${htmlFor}-error`} role="alert">
          {error}
        </p>
      ) : hint ? (
        <p className="text-sm text-text-secondary">{hint}</p>
      ) : null}
    </div>
  );
}