import type { Project } from "@/data/projects";
import { getFeaturedProjects, getSecondaryProjects } from "@/data/projects";
import { ProjectCard } from "@/components/work/project-card";

type ProjectGridProps = {
  projects: Project[];
};

/**
 * Selected Work layout architecture:
 * featured project(s) take a larger horizontal card,
 * everything else falls into a responsive two-column grid.
 * Cards stack naturally on mobile with no overflow.
 */
export function ProjectGrid({ projects }: ProjectGridProps) {
  const featured = getFeaturedProjects(projects);
  const secondary = getSecondaryProjects(projects);

  return (
    <div className="mt-10 md:mt-12">
      {featured.length > 0 ? (
        <ul className="grid gap-5 md:gap-6">
          {featured.map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} variant="featured" />
            </li>
          ))}
        </ul>
      ) : null}

      {secondary.length > 0 ? (
        <ul
          className={
            featured.length > 0
              ? "mt-5 grid gap-5 sm:grid-cols-2 md:mt-6 md:gap-6"
              : "grid gap-5 sm:grid-cols-2 md:gap-6"
          }
        >
          {secondary.map((project) => (
            <li key={project.slug} className="min-w-0">
              <ProjectCard project={project} variant="standard" />
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
