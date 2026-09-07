import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about DevTorque's approach to thoughtful software and digital product work.",
  alternates: {
    canonical: "/about"
  }
};

export default function AboutPage() {
  return (
    <Section>
      <Container>
        <SectionLabel>About</SectionLabel>
        <Heading as="h1" className="mt-4" size="h1">
          A software partner for teams that value clarity, ownership, and careful execution.
        </Heading>
        <p className="mt-6 max-w-2xl text-body-large text-text-secondary">
          This page is prepared for the full DevTorque story, operating principles, and team content.
        </p>
      </Container>
    </Section>
  );
}
