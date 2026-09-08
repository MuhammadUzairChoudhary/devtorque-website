import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { DesktopNavigation } from "@/components/navigation/DesktopNavigation";
import { HeaderScrollState } from "@/components/layout/HeaderScrollState";
import { MobileNavigation } from "@/components/navigation/MobileNavigation";

export function Header() {
  return (
    <header className="site-header sticky top-0 z-[var(--z-header)]">
      <HeaderScrollState />
      <div className="site-header-shell container-page grid h-16 grid-cols-[1fr_auto] items-center md:h-[70px] lg:grid-cols-[auto_minmax(0,1fr)_auto]">
        <Link aria-label="DevTorque home" className="flex items-center justify-self-start transition-opacity duration-[var(--duration-fast)] ease-[var(--ease-standard)] hover:opacity-75" href="/">
          <Image
            alt="DevTorque"
            className="h-10 w-auto"
            height={161}
            priority
            src="/images/brand/devtorque-logo-name.svg"
            width={992}
          />
        </Link>

        <div className="hidden justify-self-center lg:block">
          <DesktopNavigation />
        </div>

        <div className="hidden justify-self-end lg:block">
          <Button href="/contact" size="compact">
            Get in touch
          </Button>
        </div>

        <div className="justify-self-end lg:hidden">
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
