import Link from "next/link";
import { ArrowRight, ArrowUpRight, Award } from "lucide-react";
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
 * client JavaScript is required.
 *
 * Every row is conditional: recognition, description, technologies, and
 * GitHub/live links render only when the data exists. Missing URLs are
 * omitted silently — never "coming soon" or "demo unavailable".
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
          <Link href={detailHref} className="rounded-sm transition-colors hover:text-foreground/85">
            {project.title}
          </Link>
        </h3>

        {project.recognition ? (
          <p className="mt-2.5 flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
            <Award aria-hidden="true" className="size-3.5 shrink-0 text-signal" />
            {project.recognition}
          </p>
        ) : null}

        {project.shortDescription ? (
          <p className="mt-2.5 line-clamp-3 text-[0.95rem] leading-relaxed text-muted-foreground">
            {project.shortDescription}
          </p>
        ) : null}

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

        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-5">
          <Link
            href={detailHref}
            aria-label={`${project.title} — view case study`}
            className="inline-flex items-center gap-1.5 rounded-sm text-sm font-medium text-foreground"
          >
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
          </Link>
          {project.sourceUrl ? (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} — source code on GitHub`}
              className="inline-flex items-center gap-1 rounded-sm text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              GitHub
              <ArrowUpRight aria-hidden="true" className="size-3.5" />
            </a>
          ) : null}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} — live product`}
              className="inline-flex items-center gap-1 rounded-sm text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Live
              <ArrowUpRight aria-hidden="true" className="size-3.5" />
            </a>
          ) : null}
        </div>
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
