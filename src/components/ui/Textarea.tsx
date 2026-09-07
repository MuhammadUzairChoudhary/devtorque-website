import { cn } from "@/lib/utils";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean;
}

export function Textarea({ className, invalid, ...props }: TextareaProps) {
  return (
    <textarea
      aria-invalid={invalid || undefined}
      className={cn(
        "min-h-[160px] w-full resize-y rounded-[var(--radius-sm)] border border-border-input bg-surface px-4 py-3 font-[var(--font-geist)] text-base text-text-primary transition-[border-color,box-shadow] duration-[var(--duration-fast)] ease-[var(--ease-standard)] placeholder:text-text-muted",
        "focus:border-accent focus:outline-none focus:ring-[3px] focus:ring-[rgb(239_96_0_/_0.14)]",
        invalid && "border-error focus:border-error focus:ring-[rgb(180_35_24_/_0.16)]",
        className
      )}
      {...props}
    />
  );
}