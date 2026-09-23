"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/section";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    menuButtonRef.current?.focus({ preventScroll: true });
  }, []);

  // Close on Escape and lock body scroll while the menu is open.
  useEffect(() => {
    if (!open) return;
    firstLinkRef.current?.focus({ preventScroll: true });
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previous;
    };
  }, [open, close]);

  // Close the mobile menu if the viewport grows to desktop.
  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)");
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const elevated = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300",
        elevated
          ? "border-b border-white/[0.06] bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container>
        <nav
          aria-label="Primary"
          className={cn(
            "flex items-center justify-between transition-[height] duration-300",
            scrolled ? "h-14" : "h-16 md:h-[4.5rem]",
          )}
        >
          <a
            href="#top"
            aria-label={`${site.name} — back to top`}
            className="rounded-sm font-mono text-[15px] font-semibold tracking-tight text-foreground"
          >
            {site.name}
            <span aria-hidden="true" className="text-signal">
              .
            </span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="type-label text-muted-foreground transition-colors duration-200 hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            ref={menuButtonRef}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex size-10 items-center justify-center rounded-md border border-white/10 text-foreground transition-colors hover:bg-white/[0.06] md:hidden"
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="border-t border-white/[0.06] bg-background/95 backdrop-blur-md md:hidden"
          >
            <Container className="py-4">
              <ul className="flex flex-col">
                {navLinks.map((link, index) => (
                  <li key={link.href}>
                    <a
                      ref={index === 0 ? firstLinkRef : undefined}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-md px-2 py-3.5 text-[15px] font-medium text-foreground transition-colors hover:bg-white/[0.05]"
                    >
                      {link.label}
                      <span aria-hidden="true" className="type-meta">
                        0{index + 1}
                      </span>
                    </a>
                    {index < navLinks.length - 1 ? (
                      <span aria-hidden="true" className="block h-px bg-white/[0.06]" />
                    ) : null}
                  </li>
                ))}
              </ul>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
