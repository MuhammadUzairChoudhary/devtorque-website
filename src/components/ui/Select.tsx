import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  invalid?: boolean;
}

export function Select({ children, className, invalid, ...props }: SelectProps) {
  return (
    <div className="relative">
      <select
        aria-invalid={invalid || undefined}
        className={cn(
          "h-14 w-full appearance-none rounded-[var(--radius-sm)] border border-border-input bg-surface pl-4 pr-10 font-[var(--font-geist)] text-base text-text-primary transition-[border-color,box-shadow] duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
          "focus:border-accent focus:outline-none focus:ring-[3px] focus:ring-[rgb(239_96_0_/_0.14)]",
          invalid && "border-error focus:border-error focus:ring-[rgb(180_35_24_/_0.16)]",
          className
        )}
        {...props}
      >
        {children}
      </select>
      <ChevronDown
        aria-hidden="true"
        className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-text-secondary"
        size={18}
        strokeWidth={2.25}
      />
    </div>
  );
}