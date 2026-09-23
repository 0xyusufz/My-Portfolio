import type { Capability } from "@/data/capabilities";
import { buildContent } from "@/lib/site";
import { Section } from "@/components/layout/section";

type WhatIBuildProps = {
  capabilities: Capability[];
};

/**
 * "What I Build" — capability positioning, not a skills inventory.
 * Static server-rendered content: no client JavaScript, hover is
 * CSS-only, and technology metadata stays secondary mono text.
 */
export function WhatIBuild({ capabilities }: WhatIBuildProps) {
  return (
    <Section
      id="build"
      eyebrow={buildContent.eyebrow}
      title={buildContent.heading}
      lede={buildContent.supporting}
    >
      <ul className="mt-10 grid gap-5 sm:grid-cols-2 md:mt-12 md:gap-6">
        {capabilities.map((capability) => (
          <li key={capability.title} className="min-w-0">
            <article className="group flex h-full flex-col rounded-xl border border-white/[0.08] bg-white/[0.015] p-6 transition-[border-color,background-color] duration-300 hover:border-white/[0.16] hover:bg-white/[0.03] sm:p-7">
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs tracking-[0.16em] text-muted-foreground transition-colors duration-300 group-hover:text-signal">
                  {capability.index}
                </span>
                <span
                  aria-hidden="true"
                  className="h-px flex-1 bg-white/[0.08] transition-colors duration-300 group-hover:bg-white/[0.16]"
                />
              </div>

              <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">
                {capability.title}
              </h3>

              <p className="mt-2.5 text-[0.95rem] leading-relaxed text-muted-foreground">
                {capability.description}
              </p>

              {capability.technologies.length > 0 ? (
                <ul
                  aria-label={`${capability.title} — documented technologies`}
                  className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 border-t border-white/[0.06] pt-4"
                >
                  {capability.technologies.map((tech, index) => (
                    <li key={tech} className="font-mono text-xs text-muted-foreground/75">
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
    </Section>
  );
}
