import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";
import { ProjectDetail } from "@/components/work/project-detail";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found — 0xyusufz" };
  return {
    title: `${project.title} — 0xyusufz`,
    description: project.shortDescription,
  };
}

/**
 * Data-driven case-study route. Slugs come from the project index;
 * unknown slugs resolve to notFound(). Blocks render only for
 * populated fields, so thin entries stay honest.
 */
export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  return (
    <main id="main" className="flex flex-1 flex-col">
      <ProjectDetail project={project} />
    </main>
  );
}
