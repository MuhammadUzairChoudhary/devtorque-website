import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}

export function Input({ className, invalid, ...props }: InputProps) {
  return (
    <input
      aria-invalid={invalid || undefined}
      className={cn(
        "h-14 w-full rounded-[var(--radius-sm)] border border-border-input bg-surface px-4 font-[var(--font-geist)] text-base text-text-primary transition-[border-color,box-shadow] duration-[var(--duration-fast)] ease-[var(--ease-standard)] placeholder:text-text-muted",
        "focus:border-accent focus:outline-none focus:ring-[3px] focus:ring-[rgb(239_96_0_/_0.14)]",
        invalid && "border-error focus:border-error focus:ring-[rgb(180_35_24_/_0.16)]",
        className
      )}
      {...props}
    />
  );
}