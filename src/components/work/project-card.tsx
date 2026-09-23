import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectVisual } from "@/components/work/project-visual";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  variant?: "featured" | "standard";
};

/**
 * Premium project showcase card. Server-renderable; hover interaction is
 * CSS-only (visual scale, border/surface shift, arrow nudge) so no
 * client JavaScript is required. The whole card links to /work/[slug].
 */
export function ProjectCard({ project, variant = "standard" }: ProjectCardProps) {
  const featured = variant === "featured";
  const detailHref = `/work/${project.slug}`;

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.02]",
        "transition-[border-color,background-color] duration-300 hover:border-white/[0.16] hover:bg-white/[0.035]",
        featured && "md:grid md:grid-cols-2 md:gap-0",
      )}
    >
      <div className={cn("p-4 pb-0 sm:p-5 sm:pb-0", featured && "md:p-6 md:pr-3")}>
        <ProjectVisual project={project} />
      </div>

      <div className={cn("flex flex-1 flex-col p-5 sm:p-6", featured && "md:justify-center md:p-8")}>
        <div className="flex items-center justify-between gap-3">
          <p className="type-label text-muted-foreground">{project.category}</p>
          {project.status ? (
            <p className="flex items-center gap-1.5 font-mono text-[11px] tracking-wide text-muted-foreground">
              <span
                aria-hidden="true"
                className={cn(
                  "size-1.5 rounded-full",
                  project.status === "shipped" ? "bg-signal" : "bg-white/25",
                )}
              />
              {formatStatus(project.status)}
            </p>
          ) : null}
        </div>

        <h3
          className={cn(
            "mt-3 font-semibold tracking-tight text-foreground",
            featured ? "text-2xl md:text-[1.75rem]" : "text-xl",
          )}
        >
          <Link
            href={detailHref}
            aria-label={`${project.title} — view case study`}
            className="rounded-sm after:absolute after:inset-0 after:rounded-xl"
          >
            {project.title}
          </Link>
        </h3>

        <p className="mt-2.5 line-clamp-3 text-[0.95rem] leading-relaxed text-muted-foreground">
          {project.shortDescription}
        </p>

        {project.technologies.length > 0 ? (
          <ul aria-label="Technologies" className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1">
            {project.technologies.map((tech, index) => (
              <li
                key={tech}
                className="font-mono text-xs text-muted-foreground/80"
              >
                {index > 0 ? (
                  <span aria-hidden="true" className="mr-2 text-white/20">
                    ·
                  </span>
                ) : null}
                {tech}
              </li>
            ))}
          </ul>
        ) : null}

        <p className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
          View case study
          {featured ? (
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          ) : (
            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform duration-200 group-hover:translate-x-1"
            />
          )}
        </p>
      </div>
    </article>
  );
}

function formatStatus(status: NonNullable<Project["status"]>): string {
  switch (status) {
    case "shipped":
      return "shipped";
    case "in-progress":
      return "in progress";
    case "experiment":
      return "experiment";
    case "archived":
      return "archived";
  }
}
