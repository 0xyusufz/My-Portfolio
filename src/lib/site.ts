export const site = {
  name: "0xyusufz",
  title: "0xyusufz — AI, Automation & Software",
  description:
    "Personal portfolio of 0xyusufz — AI-powered products, automation systems, SaaS platforms, and web applications.",
} as const;

export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Work", href: "#work" },
  { label: "Lab", href: "#lab" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export type HeroCta = {
  label: string;
  href: string;
};

export const heroContent = {
  eyebrow: "AI · Automation · Software",
  headline: "I build software that actually works.",
  supporting:
    "AI-powered products, automation systems, SaaS platforms, and web applications — designed, built, and shipped from idea to production.",
  primaryCta: { label: "View My Work", href: "#work" } as HeroCta,
  secondaryCta: { label: "Let's Talk", href: "#contact" } as HeroCta,
} as const;

export const workContent = {
  eyebrow: "Selected work",
  heading: "Things I've built.",
  supporting:
    "Real products, systems, and experiments — from idea to implementation.",
} as const;

export const footerContent = {
  tagline: "AI · Automation · SaaS · Web",
  copyright: "© 2026 0xyusufz. All rights reserved.",
} as const;
