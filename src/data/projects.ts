import type { StaticImageData } from "next/image";

/**
 * Project data layer — the single source of truth for Selected Work.
 *
 * Workflow: add one `Project` object here and it flows through
 * SelectedWork → ProjectGrid → ProjectCard → /work/[slug]
 * without touching any UI component.
 *
 * Only verified fields are populated; anything unverified stays empty.
 * Nothing here may be invented (no fake clients, metrics, or URLs).
 */

export type ProjectStatus = "shipped" | "in-progress" | "experiment" | "archived";

export type ProjectImage = {
  /** Local asset only (public/ import or StaticImageData). No remote placeholders. */
  src: string | StaticImageData;
  /** Required meaningful alt text for the project visual. */
  alt: string;
};

export type Project = {
  slug: string;
  title: string;
  shortDescription?: string;
  longDescription?: string;
  category: string;
  technologies: string[];
  image?: ProjectImage;
  /** Slot for a future local demo clip. Unpopulated until real media exists. */
  videoUrl?: string;
  liveUrl?: string;
  sourceUrl?: string;
  featured?: boolean;
  status?: ProjectStatus;
  problem?: string;
  solution?: string;
  architecture?: string;
  technicalHighlights?: string[];
  implementation?: string;
  outcome?: string;
  /** Verified recognition only (award, prize) — never invented. */
  recognition?: string;
  /**
   * Estimated/projected impact as described in project documentation.
   * Always rendered with an explicit "estimated" label — never as a fact.
   */
  estimatedImpact?: string;
  /** Contextual honesty notes (e.g. what a figure represents). Rendered as a footnote. */
  sourceNotes?: string;
};

/**
 * Curated project index. Every field below comes from supplied, verified
 * project documentation. Anything unverified is left empty — estimates are
 * never stated as facts, goals are never stated as outcomes.
 */
export const projects: Project[] = [
  {
    slug: "healthcare-crm",
    title: "Healthcare CRM",
    shortDescription:
      "A CRM and workflow system designed to streamline clinic/hospital operations, including patient management, reminders, follow-ups, and feedback workflows.",
    category: "Healthcare · SaaS · Automation",
    technologies: [
      "React",
      "TypeScript",
      "Airtable",
      "n8n",
      "Cloudflare Workers",
      "WhatsApp",
      "Google Review integration",
      "Vercel",
      "Render",
    ],
    sourceUrl: "https://github.com/0xyusufz/Dermat-CRM",
    featured: true,
    architecture:
      "React frontend with Cloudflare Workers as the serverless integration and API layer, Airtable for data, n8n for workflow automation, WhatsApp for medicine and reminder communication, and Google Reviews integration.",
    estimatedImpact: "60–80% reduction in repetitive administrative work",
    sourceNotes:
      "Impact figure is an estimate described in project documentation, not a measured result.",
  },
  {
    slug: "ai-feedback-automation",
    title: "AI Feedback Automation",
    shortDescription:
      "An automated feedback pipeline that processes customer feedback, classifies it with an OpenAI-powered workflow, stores the result, and routes relevant feedback to the appropriate team.",
    category: "AI · Automation · Healthcare",
    technologies: ["OpenAI", "Airtable", "n8n", "Slack", "Zeruh Email Verification API"],
    featured: true,
    solution:
      "Feedback form → processing and classification → Airtable storage → relevant feedback routed to the department through Slack → email validation through the Zeruh Email Verification API.",
  },
  {
    slug: "hostelgrievance-security",
    title: "HostelGrievance — Security Hardening",
    shortDescription:
      "Security hardening work on a grievance-management system, focusing on authentication/session security, authorization, IDOR, and stored XSS.",
    category: "Security · Web · Backend",
    technologies: [],
    sourceUrl: "https://github.com/0xyusufz/Hostel-Grievance",
    featured: true,
    solution:
      "Security hardening addressed identified authentication, authorization, and client-side security issues.",
    technicalHighlights: [
      "Authentication and session security",
      "Authorization",
      "IDOR",
      "Stored XSS",
      "Threat modeling",
      "Security testing",
    ],
    recognition: "3rd Prize — Learnathon 5.0 · ₹5,000 cash prize",
    sourceNotes:
      "Public documentation includes SECURITY.md, THREAT-MODEL.md, and HARDENING.md.",
  },
  {
    slug: "web-compressor",
    title: "Web Compressor",
    shortDescription:
      "A browser extension concept focused on reducing webpage weight for users on slower network connections by compressing or removing heavy webpage elements.",
    category: "Browser Extension · Performance",
    technologies: [],
    featured: true,
    solution:
      "Documented goal: improve usability of websites on slower 2G/3G connections.",
    recognition: "Hackathon Winner — Google Developer Groups (GDG)",
  },
  /*
   * Secondary work — repository links verified to exist. Metadata stays
   * minimal (title, slug, URL, category) because descriptions and
   * technologies are not verified. Not surfaced on the homepage —
   * detail routes remain available.
   */
  {
    slug: "focustag",
    title: "FocusTag",
    category: "Project",
    technologies: [],
    sourceUrl: "https://github.com/0xyusufz/FocusTag",
  },
  {
    slug: "crimelens",
    title: "CrimeLens",
    category: "Project",
    technologies: [],
    sourceUrl: "https://github.com/0xyusufz/CrimeLens",
  },
  {
    slug: "agentarora",
    title: "AgentArora",
    category: "Project",
    technologies: [],
    sourceUrl: "https://github.com/0xyusufz/AgentArora",
  },
  {
    slug: "ai-agentic-cli",
    title: "ai-agentic-cli",
    category: "Project",
    technologies: [],
    sourceUrl: "https://github.com/0xyusufz/ai-agentic-cli",
  },
  {
    slug: "techystar",
    title: "TECHYSTAR",
    category: "Project",
    technologies: [],
    sourceUrl: "https://github.com/0xyusufz/TECHYSTAR",
  },
  {
    slug: "video-player",
    title: "Video-Player",
    category: "Project",
    technologies: [],
    sourceUrl: "https://github.com/0xyusufz/Video-Player",
  },
  {
    slug: "react-crypto-app",
    title: "react-crypto-app",
    category: "Project",
    technologies: [],
    sourceUrl: "https://github.com/0xyusufz/react-crypto-app",
  },
  {
    slug: "backend-services",
    title: "backend-services",
    category: "Project",
    technologies: [],
    sourceUrl: "https://github.com/0xyusufz/backend-services",
  },
  {
    slug: "task-manager-pro",
    title: "Task-Manager-Pro",
    category: "Project",
    technologies: [],
    sourceUrl: "https://github.com/0xyusufz/Task-Manager-Pro",
  },
  {
    slug: "openstore",
    title: "openstore",
    category: "Project",
    technologies: [],
    sourceUrl: "https://github.com/0xyusufz/openstore",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(list: Project[] = projects): Project[] {
  return list.filter((project) => project.featured);
}

export function getSecondaryProjects(list: Project[] = projects): Project[] {
  return list.filter((project) => !project.featured);
}
