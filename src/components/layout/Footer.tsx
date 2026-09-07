import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/lib/constants";

const quickLinks = [
  { label: "Solutions", href: "/#solutions" },
  { label: "Work", href: "/#work" },
  { label: "Approach", href: "/#process" },
  { label: "Sitemap", href: "/sitemap.xml" }
] as const;

const socialLinks = [
  {
    label: "LinkedIn",
    href: siteConfig.social.linkedin,
    icon: "/icons/Linkedin-Logo Streamline Logos-Block.svg"
  },
  {
    label: "Instagram",
    href: siteConfig.social.instagram,
    icon: "/icons/Instagram-Fill Streamline Remix-Fill.svg"
  },
  {
    label: "Facebook",
    href: siteConfig.social.facebook,
    icon: "/icons/Facebook-1 Streamline Plump.svg"
  }
] as const;

export function Footer() {
  return (
    <footer className="bg-surface text-text-secondary">
      <Container className="py-12 sm:py-14" size="wide">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_auto_auto] md:gap-16 lg:gap-24">
          <div>
            <Image
              alt="DevTorque"
              className="h-10 w-auto"
              height={40}
              src="/images/brand/devtorque-logo-name.png"
              width={191}
            />
            <p className="mt-5 max-w-[390px] text-card-description text-text-secondary">
              Software engineering and digital solutions partner for businesses.
            </p>
          </div>

          <FooterGroup title="Quick Links">
            {quickLinks.map((item) => (
              <Link className="transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)] hover:text-accent" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </FooterGroup>

          <FooterGroup title="Social Links">
            {socialLinks.map((item) => {
              return (
                <a
                  className="inline-flex items-center gap-2.5 transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)] hover:text-accent"
                  href={item.href}
                  key={item.label}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Image
                    alt=""
                    aria-hidden="true"
                    className="size-[18px] object-contain"
                    height={18}
                    src={item.icon}
                    width={18}
                  />
                  {item.label}
                </a>
              );
            })}
          </FooterGroup>
        </div>

        <div className="mt-12 text-center text-sm text-text-secondary">
          <p>&copy; {new Date().getFullYear()} DevTorque &bull; All rights reserved &bull; Made with care</p>
        </div>
      </Container>
    </footer>
  );
}

function FooterGroup({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <div className="min-w-[150px]">
      <h3 className="font-[var(--font-inter)] text-base font-semibold text-text-primary">{title}</h3>
      <div className="mt-4 grid gap-2.5 text-base">{children}</div>
    </div>
  );
}
