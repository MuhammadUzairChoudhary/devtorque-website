import type { Principle } from "@/types/content";

export function PrincipleCard({ principle }: { principle: Principle }) {
  return (
    <article className="border-t border-border pt-5">
      <h3 className="text-card-title">{principle.title}</h3>
      <p className="mt-3 text-card-description text-text-secondary">{principle.description}</p>
    </article>
  );
}
