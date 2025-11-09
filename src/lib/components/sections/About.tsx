import React from "react";
import type { PortfolioData } from "../../types/portfolio";

type Props = {
  data: PortfolioData;
};

export const About: React.FC<Props> = ({ data }) => {
  const { about, avatar, name, role } = data;
  const hasContent =
    about?.summary || (about?.highlights && about.highlights.length);

  if (!hasContent) return null;

  return (
    <section aria-labelledby="about-title" className="py-4">
      <div className="max-w-5xl mx-auto px-4 grid gap-6 sm:grid-cols-[auto,1fr] sm:gap-8 items-start">
        {avatar ? (
          <img
            src={avatar}
            alt={`Foto de ${name || "perfil"}`}
            className="w-24 h-24 rounded-full object-cover ring-2 ring-(--pf-accent)/30"
          />
        ) : null}

        <div>
          <h2 id="about-title" className="text-2xl font-semibold mb-3">
            Sobre mí
          </h2>

          {role ? (
            <p className="text-sm text-(--pf-muted) mb-2">{role}</p>
          ) : null}

          {about?.summary ? (
            <p className="text-base leading-relaxed text-(--pf-muted)">
              {about.summary}
            </p>
          ) : null}

          {about?.highlights?.length ? (
            <ul className="mt-4 grid gap-2 list-disc pl-5 text-(--pf-fg)/90">
              {about.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  );
};
