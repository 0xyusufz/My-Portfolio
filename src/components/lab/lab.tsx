import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { getSecondaryProjects } from "@/data/projects";
import { labContent } from "@/lib/site";
import { Section } from "@/components/layout/section";

type LabProps = {
  projects: Project[];
};

/**
 * Lab / More Work — secondary breadth, deliberately quieter than
 * Selected Work: compact rows, no visuals, no case-study treatment.
 *
 * Accepts the full project index and selects secondary entries itself,
 * so featured projects can never appear twice. Every field is
 * conditional: descriptions, technologies, and links render only when
 * the data provides them.
 */
export function Lab({ projects }: LabProps) {
  const secondary = getSecondaryProjects(projects);

  return (
    <Section
      id="lab"
      eyebrow={labContent.eyebrow}
      title={labContent.heading}
      lede={labContent.supporting}
    >
      {secondary.length > 0 ? (
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 md:mt-12 md:gap-4">
          {secondary.map((project) => (
            <li key={project.slug} className="min-w-0">
              <article className="group flex h-full flex-col rounded-lg border border-white/[0.07] bg-white/[0.01] px-5 py-4 transition-[border-color,background-color] duration-300 hover:border-white/[0.14] hover:bg-white/[0.025]">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="min-w-0 text-[1.05rem] font-semibold tracking-tight text-foreground">
                    <Link
                      href={`/work/${project.slug}`}
                      aria-label={`${project.title} — view project`}
                      className="rounded-sm transition-colors hover:text-foreground/85"
                    >
                      {project.title}
                    </Link>
                  </h3>
                  <span className="flex shrink-0 items-center gap-3 pt-1">
                    {project.sourceUrl ? (
                      <a
                        href={project.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} — source code on GitHub`}
                        className="inline-flex items-center gap-1 rounded-sm font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
                      >
                        GitHub
                        <ArrowUpRight aria-hidden="true" className="size-3" />
                      </a>
                    ) : null}
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} — live demo`}
                        className="inline-flex items-center gap-1 rounded-sm font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
                      >
                        Live
                        <ArrowUpRight aria-hidden="true" className="size-3" />
                      </a>
                    ) : null}
                  </span>
                </div>

                {project.shortDescription ? (
                  <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                    {project.shortDescription}
                  </p>
                ) : null}

                {project.technologies.length > 0 ? (
                  <ul
                    aria-label={`${project.title} — technologies`}
                    className="mt-2.5 flex flex-wrap items-center gap-x-2 gap-y-1"
                  >
                    {project.technologies.map((tech, index) => (
                      <li key={tech} className="font-mono text-[11px] text-muted-foreground/75">
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
              </article>
            </li>
          ))}
        </ul>
      ) : null}
    </Section>
  );
}
