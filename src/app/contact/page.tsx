import type { Metadata } from "next";
import { Check } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactMethods } from "@/components/contact/ContactMethods";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Heading } from "@/components/ui/Heading";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell DevTorque what you are trying to build, improve, or automate and we will figure out the next step together.",
  alternates: {
    canonical: "/contact"
  }
};

const expectations = [
  {
    title: "Clear conversation",
    description:
      "We start by understanding what you actually need before recommending a solution."
  },
  {
    title: "Direct access",
    description:
      "You speak directly with the people who will be working on your project."
  },
  {
    title: "Honest recommendations",
    description: "If there is a better approach, we will tell you."
  },
  {
    title: "No vendor lock in",
    description:
      "Your product, access, documentation, and code remain under your control."
  }
];

export default function ContactPage() {
  return (
    <>
      <ScrollReveal />
      <Section>
        <Container>
          <div className="mx-auto max-w-[var(--measure-copy)] text-center" data-reveal>
            <SectionLabel>Contact Us</SectionLabel>
            <Heading as="h1" className="mt-4" size="h1">
              Get in touch with us
            </Heading>
            <p className="mx-auto mt-5 max-w-[var(--measure-reading)] text-body-large text-text-secondary">
              Tell us what you&apos;re looking to build, improve, or automate. We&apos;ll get back to
              you and figure out the next step together.
            </p>
          </div>

          <div
            className="mx-auto mt-[var(--section-heading-gap)] grid max-w-[1180px] gap-14 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-16"
            data-reveal
          >
            <ContactForm />

            <div>
              <Heading as="h2" className="text-text-primary" size="h4">
                What you can expect
              </Heading>
              <ul className="mt-8 grid gap-7">
                {expectations.map((item) => (
                  <li className="flex gap-4" key={item.title}>
                    <Check
                      aria-hidden="true"
                      className="mt-1 shrink-0 text-accent"
                      size={18}
                      strokeWidth={2.5}
                    />
                    <div>
                      <h3 className="font-[var(--font-geist)] text-lg font-semibold text-text-primary">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 max-w-[34ch] text-card-description text-text-secondary">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <ContactMethods />
    </>
  );
}