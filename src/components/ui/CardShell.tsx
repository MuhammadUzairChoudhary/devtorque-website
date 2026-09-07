import { cn } from "@/lib/utils";

interface CardShellProps {
  children: React.ReactNode;
  className?: string;
}

export function CardShell({ children, className }: CardShellProps) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border-2 border-border bg-surface transition-[border-color] duration-[var(--duration-normal)] ease-[var(--ease-standard)] hover:border-[var(--border-hover)]",
        className
      )}
    >
      {children}
    </article>
  );
}
