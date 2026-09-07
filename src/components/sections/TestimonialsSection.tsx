import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <section className="overflow-hidden bg-background py-[var(--section-y)]" id="testimonials">
      <Container>
        <SectionHeading
          className="max-w-[560px]"
          eyebrow="Testimonials"
          title={
            <>
              Client satisfaction
              <br /> after <span className="text-text-secondary-large">working with us</span>
            </>
          }
        />

        <div className="reveal-stagger -mx-[var(--page-gutter)] mt-[var(--section-heading-gap)] flex snap-x gap-5 overflow-x-auto px-[var(--page-gutter)] pb-4 md:mx-auto md:grid md:max-w-[1180px] md:grid-cols-2 md:overflow-visible md:px-0 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <div
              className="w-[min(78vw,360px)] shrink-0 snap-center md:w-auto"
              data-reveal
              key={`${testimonial.person}-${testimonial.projectType}`}
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
