import React from "react";
import type { PortfolioData } from "../types/portfolio";
import { getThemeClass } from "../theme";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { Experience } from "./sections/Experience";

interface PortfolioLayoutProps {
  data: PortfolioData;
  theme?: "minimal" | "dark";
}

export const PortfolioLayout: React.FC<PortfolioLayoutProps> = ({
  data,
  theme,
}) => {
  return (
    <div className={getThemeClass(theme)}>
      <Hero data={data} />
      <About data={data} />
      <Projects projects={data.projects || []} />
      <Skills skills={data.skills || []} />
      <Experience experience={data.experience || []} />
      {/* <Contact data={data} /> */}
    </div>
  );
};
