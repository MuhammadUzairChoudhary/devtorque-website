import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className
}: SectionHeadingProps) {
  return (
    <div data-reveal className={cn("mx-auto max-w-[var(--measure-heading)] text-center", className)}>
      {eyebrow ? (
        <p className="mx-auto inline-flex rounded-[var(--radius-pill)] border border-accent/25 px-4 py-1 font-[var(--font-inter)] text-[0.8125rem] font-semibold leading-none text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-5 text-h2 text-balance text-text-primary">{title}</h2>
      {description ? (
        <p className="mx-auto mt-5 max-w-[var(--measure-copy)] text-body text-text-secondary">
          {description}
        </p>
      ) : null}
    </div>
  );
}
