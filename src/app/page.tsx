import { projects } from "@/data/projects";
import { Hero } from "@/components/hero/hero";
import { Container, Section } from "@/components/layout/section";
import { SelectedWork } from "@/components/work/selected-work";

const shells = [
  {
    id: "lab",
    eyebrow: "02 — Lab",
    title: "Experiments & systems",
    lede: "Section scaffold — explorations arrive in the next step.",
  },
  {
    id: "about",
    eyebrow: "03 — About",
    title: "About",
    lede: "Section scaffold — positioning and background arrive in the next step.",
  },
  {
    id: "contact",
    eyebrow: "04 — Contact",
    title: "Contact",
    lede: "Section scaffold — contact channels arrive in the next step.",
  },
] as const;

export default function Home() {
  return (
    <main id="main" className="flex flex-1 flex-col">
      <Hero />
      <Container aria-hidden="true" className="px-5 sm:px-8 lg:px-10">
        <div className="h-px bg-white/[0.06]" />
      </Container>
      <SelectedWork projects={projects} />
      {shells.map((shell) => (
        <Section
          key={shell.id}
          id={shell.id}
          eyebrow={shell.eyebrow}
          title={shell.title}
          lede={shell.lede}
        >
          <div className="mt-8 rounded-xl border border-dashed border-white/10 px-5 py-8">
            <p className="type-meta">Empty state — no content yet.</p>
          </div>
        </Section>
      ))}
    </main>
  );
}
