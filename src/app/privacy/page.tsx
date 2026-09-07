import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Privacy",
  description: "DevTorque privacy policy placeholder.",
  alternates: {
    canonical: "/privacy"
  }
};

export default function PrivacyPage() {
  return (
    <Section>
      <Container>
        <SectionLabel>Legal</SectionLabel>
        <Heading as="h1" className="mt-4" size="h1">
          Privacy policy
        </Heading>
        <p className="mt-6 max-w-2xl text-body-large text-text-secondary">
          Privacy policy content is prepared as a route and should be finalized before launch.
        </p>
      </Container>
    </Section>
  );
}
