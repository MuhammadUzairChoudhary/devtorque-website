import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface TextLinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  showIcon?: boolean;
  variant?: "accent" | "neutral";
}

export function TextLink({
  children,
  href,
  className,
  showIcon = true,
  variant = "neutral"
}: TextLinkProps) {
  return (
    <Link
      className={cn(
        "group inline-flex min-h-[52px] items-center justify-center gap-2 font-[var(--font-inter)] text-base font-semibold leading-none transition-[color,transform] duration-[var(--duration-fast)] ease-[var(--ease-standard)] active:scale-[0.985]",
        variant === "accent" ? "hover:text-accent-hover" : "hover:text-accent",
        className
      )}
      href={href}
      style={{ color: variant === "accent" ? "var(--accent)" : "var(--text-primary)" }}
    >
      {children}
      {showIcon ? (
        <ArrowUpRight aria-hidden="true" className="transition-transform duration-[var(--duration-fast)] ease-[var(--ease-standard)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={18} strokeWidth={2.25} />
      ) : null}
    </Link>
  );
}
