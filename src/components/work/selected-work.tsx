import type { Project } from "@/data/projects";
import { workContent } from "@/lib/site";
import { Section } from "@/components/layout/section";
import { ProjectGrid } from "@/components/work/project-grid";

type SelectedWorkProps = {
  projects: Project[];
};

/**
 * Selected Work section. Receives data as a prop so the component stays
 * independent of content — adding a project means adding one object
 * in src/data/projects.ts. Renders an intentional quiet state while
 * the index is empty.
 */
export function SelectedWork({ projects }: SelectedWorkProps) {
  return (
    <Section
      id="work"
      eyebrow={workContent.eyebrow}
      title={workContent.heading}
      lede={workContent.supporting}
    >
      {projects.length > 0 ? <ProjectGrid projects={projects} /> : <WorkEmptyState />}
    </Section>
  );
}

function WorkEmptyState() {
  return (
    <div className="mt-10 rounded-xl border border-white/[0.08] bg-white/[0.015] p-6 sm:p-8 md:mt-12 md:p-10">
      <div className="flex items-center justify-between gap-4">
        <p className="type-label text-muted-foreground">Index</p>
        <p aria-hidden="true" className="font-mono text-xs text-muted-foreground/70">
          00
        </p>
      </div>
      <div aria-hidden="true" className="mt-4 h-px bg-white/[0.06]" />
      <p className="mt-6 max-w-xl text-[0.95rem] leading-relaxed text-muted-foreground">
        Entries are curated one at a time. Each documents the problem, the
        system behind it, and how it was built — from idea to implementation.
      </p>
      <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
        {["Overview", "Architecture", "Implementation"].map((item) => (
          <li
            key={item}
            className="flex items-center gap-2 font-mono text-xs text-muted-foreground/70"
          >
            <span aria-hidden="true" className="size-1 rounded-full bg-white/20" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
