/**
 * Capabilities data layer — the categories of software built, not a
 * technology checklist. Every technology listed here appears in the
 * verified project data; nothing claims unestablished expertise,
 * scale, or user counts.
 */

export type Capability = {
  index: string;
  title: string;
  description: string;
  technologies: string[];
};

export const capabilities: Capability[] = [
  {
    index: "01",
    title: "AI Systems",
    description:
      "AI-powered workflows, agents, and product features that connect models with real application logic and tools.",
    technologies: ["OpenAI", "AI agents", "React", "TypeScript"],
  },
  {
    index: "02",
    title: "Automation",
    description:
      "Workflow systems that connect applications, APIs, data, and communication channels to reduce repetitive manual work.",
    technologies: ["n8n", "Airtable", "Slack", "WhatsApp", "Cloudflare Workers"],
  },
  {
    index: "03",
    title: "SaaS & Web Products",
    description:
      "Web applications and product interfaces built around real workflows and user needs.",
    technologies: ["React", "TypeScript", "Next.js", "Vercel"],
  },
  {
    index: "04",
    title: "APIs & Backend Systems",
    description:
      "Application logic, integrations, APIs, and backend services that connect products and external systems.",
    technologies: [
      "Cloudflare Workers",
      "APIs",
      "Airtable",
      "Serverless integrations",
      "Backend services",
    ],
  },
];
