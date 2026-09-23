import Image from "next/image";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectVisualProps = {
  project: Project;
  className?: string;
};

/**
 * Project visual area. Renders the real image when the project provides
 * one, otherwise a quiet neutral placeholder that marks the visual as
 * pending — never a fabricated screenshot or stock imagery.
 *
 * Future video/demo media slots in here (project.videoUrl) without
 * changing call sites.
 */
export function ProjectVisual({ project, className }: ProjectVisualProps) {
  return (
    <div
      className={cn(
        "relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-white/[0.08] bg-white/[0.02]",
        className,
      )}
    >
      {project.image ? (
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      ) : (
        <ProjectVisualFallback />
      )}
    </div>
  );
}

function ProjectVisualFallback() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.02]"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgb(255 255 255 / 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.04) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
        <span className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
          Visual — pending
        </span>
        <span className="h-px w-10 bg-white/15" />
      </div>
    </div>
  );
}
