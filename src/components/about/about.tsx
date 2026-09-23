import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { aboutContent, profile, socials } from "@/lib/site";
import { Section } from "@/components/layout/section";

type AboutProps = {
  projects: Project[];
};

/**
 * About — concise and evidence-based. Recognition is derived from the
 * project data (projects carrying a `recognition` field), never
 * duplicated as separate strings. No biography beyond the supplied
 * copy, no timeline, no stats, no portrait.
 */
export function About({ projects }: AboutProps) {
  const recognized = projects.filter(
    (project): project is Project & { recognition: string } =>
      typeof project.recognition === "string" && project.recognition.length > 0,
  );

  return (
    <Section id="about" eyebrow={aboutContent.eyebrow} title={aboutContent.heading}>
      <div className="mt-10 grid gap-10 md:mt-12 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          {aboutContent.body.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="type-body mt-0 max-w-xl [&+&]:mt-5">
              {paragraph}
            </p>
          ))}

          <ul aria-label="Profile links" className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${profile.handle} on ${social.label}`}
                  className="inline-flex items-center gap-1 rounded-sm text-sm font-medium text-foreground transition-colors hover:text-foreground/80"
                >
                  {social.label}
                  <ArrowUpRight aria-hidden="true" className="size-3.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {recognized.length > 0 ? (
          <aside
            aria-labelledby="recognition-heading"
            className="h-fit rounded-xl border border-white/[0.08] bg-white/[0.015] p-6 sm:p-7 lg:col-span-5"
          >
            <h3
              id="recognition-heading"
              className="type-label text-muted-foreground"
            >
              {aboutContent.recognitionHeading}
            </h3>
            <ul className="mt-5 space-y-5">
              {recognized.map((project) => (
                <li key={project.slug} className="border-t border-white/[0.06] pt-5 first:border-t-0 first:pt-0">
                  <p className="flex items-start gap-2 text-[0.95rem] font-medium leading-relaxed text-foreground">
                    <span
                      aria-hidden="true"
                      className="mt-[9px] size-1 shrink-0 rounded-full bg-signal"
                    />
                    {project.recognition}
                  </p>
                  <p className="mt-1.5 pl-3 text-sm text-muted-foreground">
                    <Link
                      href={`/work/${project.slug}`}
                      className="rounded-sm transition-colors hover:text-foreground"
                    >
                      {project.title}
                    </Link>
                  </p>
                </li>
              ))}
            </ul>
          </aside>
        ) : null}
      </div>
    </Section>
  );
}
