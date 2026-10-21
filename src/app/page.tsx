import { getFeaturedProjects, projects } from "@/data/projects";
import { capabilities } from "@/data/capabilities";
import { Hero } from "@/components/hero/hero";
import { Container } from "@/components/layout/section";
import { SelectedWork } from "@/components/work/selected-work";
import { WhatIBuild } from "@/components/build/what-i-build";
import { achievements } from "@/data/achievements";
import { Achievements } from "@/components/achievements/achievements";
import { About } from "@/components/about/about";
import { Contact } from "@/components/contact/contact";

export default function Home() {
  return (
    <main id="main" className="flex flex-1 flex-col">
      <Hero />
      <Container aria-hidden="true" className="px-5 sm:px-8 lg:px-10">
        <div className="h-px bg-white/[0.06]" />
      </Container>
      <SelectedWork projects={getFeaturedProjects()} />
      <WhatIBuild capabilities={capabilities} />
      <Achievements entries={achievements} />
      <About projects={projects} />
      <Contact />
    </main>
  );
}
