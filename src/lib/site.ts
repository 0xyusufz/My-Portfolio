export const site = {
  name: "0xyusufz",
  title: "Md Yusuf Fatah — AI, Automation & Software",
  description:
    "Md Yusuf Fatah builds AI systems, automation workflows, SaaS products, web applications, and backend systems.",
} as const;

export const profile = {
  name: "Md Yusuf Fatah",
  handle: "0xyusufz",
} as const;

export type Social = {
  label: string;
  href: string;
};

/** Single source of truth for personal links — never duplicate these URLs in components. */
export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/0xyusufz" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/md-yusuf-fatah/" },
  { label: "X", href: "https://x.com/0xyusufz" },
];

export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Work", href: "#work" },
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

export const buildContent = {
  eyebrow: "What I build",
  heading: "Software across the stack.",
  supporting:
    "I work across AI systems, automation, product development, and backend infrastructure — turning ideas into working software.",
} as const;

export const aboutContent = {
  eyebrow: "About",
  heading: "I build, ship, and keep improving real software.",
  body: [
    "I'm Md Yusuf Fatah, a developer focused on AI systems, automation, SaaS products, web applications, and backend infrastructure. I like working across the stack — from product interfaces and APIs to workflows, integrations, and AI-powered systems.",
    "My projects are built around solving practical problems: reducing repetitive work, connecting systems, improving workflows, and turning ideas into software that can actually be used.",
  ],
  recognitionHeading: "Selected recognition",
} as const;

export const contactContent = {
  eyebrow: "Contact",
  heading: "Let's build something useful.",
  supporting:
    "If you're working on an AI product, automation system, SaaS idea, or software project, I'd be interested in hearing about it.",
  primaryCtaLabel: "Connect on LinkedIn",
} as const;

export const achievementsContent = {
  eyebrow: "Achievements & Events",
  heading: "The moments behind the work.",
  supporting:
    "A visual record of competitions, recognitions, and events that have been part of my journey as a developer.",
} as const;

export const footerContent = {
  tagline: "AI · Automation · SaaS · Web",
  copyright: "© 2026 0xyusufz. All rights reserved.",
} as const;
