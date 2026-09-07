import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  href?: string;
  size?: "default" | "compact";
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "accent" | "secondary" | "ghost" | "inverse";
  className?: string;
  style?: React.CSSProperties;
}

const variants = {
  primary:
    "border-text-primary bg-text-primary [color:var(--accent-foreground)] hover:bg-text-strong hover:border-text-strong",
  accent:
    "border-accent bg-accent [color:var(--accent-foreground)] hover:border-accent-hover hover:bg-accent-hover",
  secondary:
    "border-transparent bg-transparent text-text-primary hover:bg-surface-muted",
  ghost:
    "bg-transparent text-text-primary hover:bg-surface-muted border-transparent",
  inverse:
    "border-text-primary bg-text-primary [color:var(--accent-foreground)] hover:bg-text-strong hover:border-text-strong"
};

const sizes = {
  default: "min-h-[52px] px-4 py-2",
  compact: "min-h-11 px-4 py-2 text-[0.9375rem]"
};

export function Button({
  children,
  disabled = false,
  href,
  size = "default",
  type = "button",
  variant = "primary",
  className,
  style
}: ButtonProps) {
  const isFilled = variant === "primary" || variant === "accent" || variant === "inverse";
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-[var(--radius-sm)] border font-[var(--font-inter)] text-base font-semibold leading-none transition-[background-color,border-color,color,transform] duration-[var(--duration-fast)] ease-[var(--ease-standard)] hover:-translate-y-px active:translate-y-0 active:scale-[0.985] disabled:pointer-events-none disabled:opacity-60",
    variants[variant],
    sizes[size],
    className
  );
  const buttonStyle = isFilled
    ? { color: "var(--accent-foreground)", ...style }
    : style;

  if (href) {
    return (
      <Link
        className={classes}
        href={href}
        style={buttonStyle}
      >
        <span>{children}</span>
        <ArrowUpRight aria-hidden="true" className="transition-transform duration-[var(--duration-fast)] ease-[var(--ease-standard)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={18} strokeWidth={2.3} />
      </Link>
    );
  }

  return (
    <button
      className={classes}
      disabled={disabled}
      style={buttonStyle}
      type={type}
    >
      <span>{children}</span>
      <ArrowUpRight aria-hidden="true" className="transition-transform duration-[var(--duration-fast)] ease-[var(--ease-standard)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={18} strokeWidth={2.3} />
    </button>
  );
}
