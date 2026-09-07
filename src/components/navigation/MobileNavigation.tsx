"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useId, useState } from "react";
import { navItems } from "@/lib/constants";
import { useActiveSection } from "@/components/navigation/useActiveSection";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  const prefersReducedMotion = useReducedMotion();
  const activeId = useActiveSection();

  useEffect(() => {
    document.body.dataset.navOpen = isOpen ? "true" : "false";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.removeAttribute("data-nav-open");
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button
        aria-controls={menuId}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        className="inline-flex size-[52px] items-center justify-center rounded-[var(--radius-sm)] border border-border bg-surface text-text-primary transition-[background-color,border-color,transform] duration-[var(--duration-fast)] ease-[var(--ease-standard)] hover:border-[var(--border-hover)] hover:bg-surface-muted active:scale-[0.96]"
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        <AnimatePresence initial={false} mode="wait">
          <motion.span
            animate={{ opacity: 1, scale: 1 }}
            aria-hidden="true"
            className="block"
            exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.92 }}
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.92 }}
            key={isOpen ? "close" : "open"}
            transition={{ duration: 0.16 }}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.span>
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 top-16 z-[var(--z-overlay)] border-t border-border bg-background px-[var(--page-gutter)] py-8 md:top-[70px]"
            exit={prefersReducedMotion ? undefined : { opacity: 0 }}
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
          >
          <motion.nav
            animate={{ opacity: 1, y: 0 }}
            aria-label="Mobile primary"
            className="container-page"
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
            id={menuId}
            initial={prefersReducedMotion ? false : { opacity: 0, y: -8 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="grid gap-1">
              {navItems.map((item) => {
                const sectionId = item.href.split("#")[1];
                const isActive = Boolean(sectionId) && activeId === sectionId;

                return (
                  <Link
                    aria-current={isActive ? "location" : undefined}
                    className={`nav-section-link rounded-[var(--radius-sm)] py-4 font-[var(--font-inter)] text-3xl leading-none transition-colors ${
                      isActive
                        ? "font-bold"
                        : "font-normal"
                    }`}
                    href={item.href}
                    key={item.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
            <Link
              className="mt-8 inline-flex min-h-[52px] items-center justify-center rounded-[var(--radius-sm)] bg-text-primary px-4 py-2 font-[var(--font-inter)] text-base font-semibold [color:var(--accent-foreground)] transition-[background-color,transform] duration-[var(--duration-fast)] ease-[var(--ease-standard)] hover:bg-text-strong active:scale-[0.985]"
              href="/contact"
              onClick={() => setIsOpen(false)}
              style={{ color: "var(--accent-foreground)" }}
            >
              Get in touch
            </Link>
          </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
