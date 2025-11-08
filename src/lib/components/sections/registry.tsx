import type { PortfolioData } from "../../types/portfolio";
import type { SectionId, SectionInstance } from "../../types/sections";
import { About } from "./About";
import { Experience } from "./Experience";
import { Hero } from "./Hero";
import { Projects } from "./Projects";
import { Skills } from "./Skills";

export type RenderCtx = {
  data: PortfolioData;
  instance: SectionInstance;
};

export type SectionRender = (ctx: RenderCtx) => React.ReactNode;

export const DEFAULT_REGISTRY: Record<SectionId, SectionRender> = {
  hero: ({ data }) => <Hero data={data} />,
  about: ({ data }) => <About data={data} />,
  projects: ({ data, instance }) => (
    <Projects
      title={instance.title}
      projects={data.projects || []}
      variant={instance.variant as "cards" | "gallery"}
    />
  ),
  skills: ({ data, instance }) => (
    <Skills skills={data.skills || []} title={instance.title} />
  ),
  experience: ({ data, instance }) => (
    <Experience experience={data.experience || []} title={instance.title} />
  ),
  contact: () => null,
};

export const mergeRegistry = (
  custom?: Partial<Record<SectionId, SectionRender>>
) => {
  return {
    ...DEFAULT_REGISTRY,
    ...(custom || {}),
  };
};
