import type { StaticImageData } from "next/image";

/**
 * Project data layer — the single source of truth for Selected Work.
 *
 * Workflow: add one `Project` object here and it flows through
 * SelectedWork → ProjectGrid → ProjectCard → /work/[slug]
 * without touching any UI component.
 *
 * No fields are populated yet. Real project data lands in a later step;
 * nothing here may be invented (no fake clients, metrics, or URLs).
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
  shortDescription: string;
  longDescription: string;
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
};

export const projects: Project[] = [];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(list: Project[] = projects): Project[] {
  return list.filter((project) => project.featured);
}

export function getSecondaryProjects(list: Project[] = projects): Project[] {
  return list.filter((project) => !project.featured);
}
