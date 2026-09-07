"use client";

import Link from "next/link";
import { navItems } from "@/lib/constants";
import { useActiveSection } from "@/components/navigation/useActiveSection";

export function DesktopNavigation() {
  const activeId = useActiveSection();

  return (
    <nav aria-label="Primary" className="hidden items-center justify-center gap-7 lg:flex">
      {navItems.map((item) => {
        const sectionId = item.href.split("#")[1];
        const isActive = Boolean(sectionId) && activeId === sectionId;

        return (
          <Link
            aria-current={isActive ? "true" : undefined}
            className={`group relative inline-flex min-h-11 items-center gap-2 font-[var(--font-inter)] text-base leading-none transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)] hover:text-text-primary ${
              isActive
                ? "font-semibold text-text-primary"
                : "font-normal text-text-secondary-large"
            }`}
            href={item.href}
            key={item.href}
          >
            {item.label}
            <span aria-hidden="true" className="absolute inset-x-0 bottom-1 h-px origin-left scale-x-0 bg-accent transition-transform duration-[var(--duration-fast)] ease-[var(--ease-standard)] group-hover:scale-x-100 group-focus-visible:scale-x-100" />
          </Link>
        );
      })}
    </nav>
  );
}