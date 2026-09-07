import { SolutionCard } from "@/components/cards/SolutionCard";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { solutions } from "@/data/solutions";

export function SolutionsSection() {
  return (
    <section className="bg-background py-[var(--section-y)]" id="solutions">
      <Container size="wide">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              Solutions designed
              <br className="hidden sm:block" /> around <span className="text-text-secondary-large">your business</span>
            </>
          }
        />
        <div className="reveal-stagger grid-12 mt-[var(--section-heading-gap)]">
          {solutions.map((solution) => (
            <SolutionCard key={solution.slug} solution={solution} />
          ))}
        </div>
      </Container>
    </section>
  );
}
