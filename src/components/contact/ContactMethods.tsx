import { ArrowUpRight, Instagram, Linkedin, Mail, type LucideIcon } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/Heading";
import { siteConfig } from "@/lib/constants";

interface ContactMethod {
  display: string;
  external?: boolean;
  href: string;
  icon: LucideIcon;
  label: string;
}

const methods: ContactMethod[] = [
  { label: "Email", display: siteConfig.email, href: `mailto:${siteConfig.email}`, icon: Mail },
  { label: "LinkedIn", display: "DevTorque on LinkedIn", href: siteConfig.social.linkedin, icon: Linkedin, external: true },
  { label: "Instagram", display: "@devtorque.ai", href: siteConfig.social.instagram, icon: Instagram, external: true }
];

export function ContactMethods() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <Container size="wide">
        <div className="grid-12 items-end">
          <div className="col-span-12 md:col-span-4">
            <p className="font-[var(--font-inter)] text-sm font-semibold uppercase tracking-[0.12em] text-accent">Direct channels</p>
            <Heading as="h2" className="mt-3 text-text-primary" size="h4">Prefer another way?</Heading>
          </div>

          <ul className="col-span-12 mt-8 grid gap-2 md:col-span-8 md:mt-0">
            {methods.map((method) => (
              <li key={method.label}>
                <a
                  className="group grid min-h-[76px] grid-cols-[minmax(88px,0.35fr)_minmax(0,1fr)_auto] items-center gap-4 py-4 font-[var(--font-inter)] transition-colors duration-[var(--duration-fast)] hover:text-accent"
                  href={method.href}
                  rel={method.external ? "noreferrer" : undefined}
                  target={method.external ? "_blank" : undefined}
                >
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary">
                    <method.icon aria-hidden="true" size={17} strokeWidth={2} />
                    {method.label}
                  </span>
                  <span className="truncate text-base font-semibold text-text-primary transition-colors duration-[var(--duration-fast)] group-hover:text-accent">{method.display}</span>
                  <ArrowUpRight aria-hidden="true" className="text-text-secondary transition-transform duration-[var(--duration-fast)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" size={19} strokeWidth={2} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
