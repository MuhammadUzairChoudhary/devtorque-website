"use client";

import { useEffect } from "react";

export function HeaderScrollState() {
  useEffect(() => {
    const root = document.documentElement;

    function updateScrollState() {
      root.dataset.pageScrolled = window.scrollY > 8 ? "true" : "false";
    }

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => {
      root.removeAttribute("data-page-scrolled");
      window.removeEventListener("scroll", updateScrollState);
    };
  }, []);

  return null;
}
