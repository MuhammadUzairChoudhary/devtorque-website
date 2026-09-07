import { Facebook, Instagram, Linkedin, Mail, type LucideIcon } from "lucide-react";
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
  {
    label: "Email",
    display: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail
  },
  {
    label: "LinkedIn",
    display: "LinkedIn",
    href: siteConfig.social.linkedin,
    icon: Linkedin,
    external: true
  },
  {
    label: "Instagram",
    display: "Instagram",
    href: siteConfig.social.instagram,
    icon: Instagram,
    external: true
  },
  {
    label: "Facebook",
    display: "Facebook",
    href: siteConfig.social.facebook,
    icon: Facebook,
    external: true
  }
];

export function ContactMethods() {
  return (
    <section className="bg-background pb-[var(--section-y)]">
      <Container>
        <div className="text-center">
          <Heading as="h2" className="text-text-primary" size="h4">
            Prefer another way?
          </Heading>
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
            {methods.map((method) => (
              <li key={method.label}>
                <a
                  className="group inline-flex items-center gap-2.5 font-[var(--font-inter)] text-base font-semibold text-text-primary transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)] hover:text-accent"
                  href={method.href}
                  rel={method.external ? "noreferrer" : undefined}
                  target={method.external ? "_blank" : undefined}
                >
                  <method.icon
                    aria-hidden="true"
                    className="text-text-secondary transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)] group-hover:text-accent"
                    size={18}
                    strokeWidth={2}
                  />
                  {method.display}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}