import type { Metadata } from "next";
import { SolutionCard } from "@/components/cards/SolutionCard";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { solutions } from "@/data/solutions";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Explore DevTorque solutions for voice agents, AI automation, websites, web applications, UI/UX design, and application development.",
  alternates: {
    canonical: "/solutions"
  }
};

export default function SolutionsPage() {
  return (
    <Section>
      <Container size="wide">
        <div className="max-w-3xl">
          <SectionLabel>Solutions</SectionLabel>
          <Heading as="h1" className="mt-4" size="h1">
            Software services shaped around the business problem.
          </Heading>
        </div>
        <div className="mt-12 grid auto-rows-fr gap-4 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <SolutionCard key={solution.slug} solution={solution} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
