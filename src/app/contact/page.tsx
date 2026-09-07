import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Heading } from "@/components/ui/Heading";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell DevTorque what you are trying to build, improve, or automate and we will figure out the next step together.",
  alternates: {
    canonical: "/contact"
  }
};

export default function ContactPage() {
  return (
    <>
      <ScrollReveal />
      <section className="bg-background pb-12 pt-8 sm:pb-16 sm:pt-10 lg:pb-20 lg:pt-12">
        <Container size="wide">
          <div className="mx-auto max-w-[var(--measure-heading)] text-center" data-reveal>
            <p className="inline-flex rounded-[var(--radius-pill)] border border-accent/25 px-4 py-1 font-[var(--font-inter)] text-[0.8125rem] font-semibold leading-none text-accent">
              Start a Project
            </p>
            <Heading as="h1" className="mt-4 text-balance" size="h1">
              Tell us what you&apos;re building.
            </Heading>
            <p className="mx-auto mt-4 max-w-[var(--measure-reading)] text-body text-text-secondary">
              Share the useful context, even if the idea is still taking shape. We&apos;ll help
              define the right next step before proposing a solution.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-[770px]" data-reveal>
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
