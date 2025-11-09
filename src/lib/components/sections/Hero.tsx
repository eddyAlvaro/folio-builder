import React from "react";
import type { PortfolioData } from "../../types/portfolio";

interface HeroProps {
  data: PortfolioData;
}
export const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <header className="max-w-5xl mx-auto py-4 px-4 flex flex-col gap-4">
      <p className="text-sm text-(--pf-muted)">Hola, soy</p>
      <h1 className="text-4xl font-bold">{data.name}</h1>
      {data.role ? (
        <p className="text-xl text-(--pf-muted)">{data.role}</p>
      ) : null}
      {data.headline ? (
        <p className="text-base text-(--pf-muted) max-w-2xl">{data.headline}</p>
      ) : null}
      <button className="inline-flex w-fit items-center gap-2 bg-(--pf-accent) text-white px-5 py-2 rounded-md text-sm">
        Ver proyectos
      </button>
    </header>
  );
};
