import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { Container } from "@/components/layout/section";
import { ProjectVisual } from "@/components/work/project-visual";
import { cn } from "@/lib/utils";

type ProjectDetailProps = {
  project: Project;
};

type DetailBlock = {
  heading: string;
  body: string;
};

/**
 * Case-study template. Every block renders only when the project provides
 * the field — unpopulated fields render nothing and no content is
 * fabricated. Order: hero → overview → problem → solution →
 * architecture → technical decisions → implementation → outcome →
 * impact (always labeled estimated) → links → notes.
 */
export function ProjectDetail({ project }: ProjectDetailProps) {
  const blocks: DetailBlock[] = [
    { heading: "Problem", body: project.problem ?? "" },
    { heading: "Solution", body: project.solution ?? "" },
    { heading: "Architecture", body: project.architecture ?? "" },
    { heading: "Implementation", body: project.implementation ?? "" },
    { heading: "Outcome", body: project.outcome ?? "" },
  ].filter((block) => block.body.length > 0);

  const links = [
    project.liveUrl ? { label: "Live product", href: project.liveUrl } : null,
    project.sourceUrl ? { label: "Source code", href: project.sourceUrl } : null,
  ].filter((link): link is { label: string; href: string } => link !== null);

  return (
    <div className="pb-16 pt-28 md:pb-24 md:pt-40">
      <Container>
        <Link
          href="/#work"
          className="inline-flex items-center gap-1.5 rounded-sm text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          All work
        </Link>

        <header className="mt-8 max-w-3xl">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
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
                {project.status.replace("-", " ")}
              </p>
            ) : null}
          </div>
          <h1 className="type-display mt-5 text-foreground">{project.title}</h1>
          {project.recognition ? (
            <p className="mt-4 flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-signal" />
              {project.recognition}
            </p>
          ) : null}
          {project.shortDescription ? (
            <p className="type-body mt-5 max-w-2xl">{project.shortDescription}</p>
          ) : null}
        </header>

        <div className="mt-10 max-w-4xl">
          <ProjectVisual project={project} />
        </div>

        {project.technologies.length > 0 ? (
          <ul aria-label="Technologies" className="mt-6 flex max-w-4xl flex-wrap gap-x-2 gap-y-1">
            {project.technologies.map((tech, index) => (
              <li key={tech} className="font-mono text-xs text-muted-foreground/80">
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

        <div className="mt-12 max-w-3xl space-y-12 md:space-y-14">
          {project.longDescription ? (
            <section aria-labelledby="overview-heading">
              <h2 id="overview-heading" className="type-section text-foreground">
                Overview
              </h2>
              <p className="type-body mt-4">{project.longDescription}</p>
            </section>
          ) : null}

          {blocks.map((block) => (
            <section
              key={block.heading}
              aria-labelledby={`${block.heading.toLowerCase()}-heading`}
            >
              <h2
                id={`${block.heading.toLowerCase()}-heading`}
                className="type-section text-foreground"
              >
                {block.heading}
              </h2>
              <p className="type-body mt-4">{block.body}</p>
            </section>
          ))}

          {project.technicalHighlights && project.technicalHighlights.length > 0 ? (
            <section aria-labelledby="technical-decisions-heading">
              <h2 id="technical-decisions-heading" className="type-section text-foreground">
                Technical decisions
              </h2>
              <ul className="mt-4 space-y-3">
                {project.technicalHighlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-[0.95rem] leading-relaxed text-muted-foreground">
                    <span aria-hidden="true" className="mt-[9px] size-1 shrink-0 rounded-full bg-signal" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {project.estimatedImpact ? (
            <section aria-labelledby="impact-heading">
              <h2 id="impact-heading" className="type-section text-foreground">
                Impact
              </h2>
              <p className="mt-4 text-[1.05rem] leading-relaxed text-foreground">
                {project.estimatedImpact}
              </p>
              <p className="type-meta mt-2">
                Estimated impact described in project documentation — not a measured result.
              </p>
            </section>
          ) : null}

          {links.length > 0 ? (
            <section aria-labelledby="links-heading">
              <h2 id="links-heading" className="type-section text-foreground">
                Links
              </h2>
              <ul className="mt-4 flex flex-wrap gap-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-white/[0.06]"
                    >
                      {link.label}
                      <ArrowUpRight aria-hidden="true" className="size-4" />
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {project.sourceNotes ? (
            <p className="type-meta border-t border-white/[0.06] pt-6">
              Note — {project.sourceNotes}
            </p>
          ) : null}
        </div>
      </Container>
    </div>
  );
}
