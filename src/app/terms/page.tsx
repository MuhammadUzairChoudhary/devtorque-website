import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Terms",
  description: "DevTorque terms placeholder.",
  alternates: {
    canonical: "/terms"
  }
};

export default function TermsPage() {
  return (
    <Section>
      <Container>
        <SectionLabel>Legal</SectionLabel>
        <Heading as="h1" className="mt-4" size="h1">
          Terms
        </Heading>
        <p className="mt-6 max-w-2xl text-body-large text-text-secondary">
          Terms content is prepared as a route and should be finalized before launch.
        </p>
      </Container>
    </Section>
  );
}
