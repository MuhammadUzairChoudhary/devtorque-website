import { Star } from "lucide-react";
import type { Testimonial } from "@/types/content";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex min-h-[320px] flex-col rounded-[var(--radius-lg)] border border-border-subtle bg-[linear-gradient(180deg,#fff_0%,#f0f0ef_100%)] p-6 transition-colors duration-[var(--duration-normal)] ease-[var(--ease-standard)] hover:border-[var(--border-hover)] sm:p-7">
      <div className="flex gap-1 text-[#f8bd00]" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            aria-hidden="true"
            className="fill-current"
            key={index}
            size={16}
            strokeWidth={0}
          />
        ))}
      </div>

      <blockquote className="mt-6 text-card-description text-text-primary">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      <figcaption className="mt-auto pt-8">
        <p className="text-card-description font-semibold text-text-primary">
          {testimonial.person}
        </p>
        <p className="mt-1 font-[var(--font-inter)] text-sm font-medium leading-tight text-accent">
          {testimonial.role ? `${testimonial.role}, ` : null}
          {testimonial.company}
        </p>
      </figcaption>
    </figure>
  );
}
