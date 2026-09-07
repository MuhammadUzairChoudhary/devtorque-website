import { Container } from "@/components/layout/Container";

export function BrandStatementSection() {
  return (
    <section className="bg-background py-[clamp(92px,10.4vw,180px)]" aria-labelledby="brand-statement">
      <Container>
        <blockquote className="mx-auto max-w-[980px] text-center" data-reveal>
          <span
            aria-hidden="true"
            className="mb-9 block font-[var(--font-geist)] text-[clamp(4.875rem,6vw,7.125rem)] font-bold leading-none text-accent"
          >
            &ldquo;
          </span>
          <p
            id="brand-statement"
            className="font-[var(--font-geist)] text-[clamp(2.35rem,4.35vw,4.5rem)] leading-[1.18] tracking-[-0.025em] text-text-primary"
          >
            <span className="font-medium md:block">
              Building software has never been
            </span>{" "}
            <span className="md:block">
              <span className="font-medium">easier.</span>{" "}
              <span className="font-light text-text-secondary-large">
                Building something
              </span>
            </span>{" "}
            <span className="font-light text-text-secondary-large md:block">
              exceptional is still rare&rdquo;.
            </span>
          </p>
        </blockquote>
      </Container>
    </section>
  );
}
