import { cn } from "@/lib/utils";

interface CardShellProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function CardShell({ children, className, ...props }: CardShellProps) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border-2 border-border bg-surface transition-[border-color] duration-[var(--duration-normal)] ease-[var(--ease-standard)] hover:border-[var(--border-hover)]",
        className
      )}
      {...props}
    >
      {children}
    </article>
  );
}
