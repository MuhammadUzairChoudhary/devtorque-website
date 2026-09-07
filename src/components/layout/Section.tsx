import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "muted" | "inverse" | "accent";
}

const variants = {
  default: "bg-transparent text-text-primary",
  muted: "bg-surface-muted text-text-primary",
  inverse: "bg-surface-inverse text-white",
  accent: "bg-accent text-accent-foreground"
};

export function Section({ children, className, id, variant = "default" }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-16 sm:py-20 lg:py-28", variants[variant], className)}
    >
      {children}
    </section>
  );
}
