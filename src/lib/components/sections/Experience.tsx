import React from "react";
import type { PortfolioExperience } from "../../types/portfolio";

type Props = {
  experience: PortfolioExperience[];
  title?: string;
};

export const Experience: React.FC<Props> = ({ experience, title }) => {
  if (!experience?.length) return null;

  return (
    <section aria-labelledby="exp-title" className="py-4">
      <div className="max-w-6xl mx-auto px-4">
        <h2 id="exp-title" className="text-2xl font-semibold mb-6">
          {title}
        </h2>

        <div className="grid gap-6">
          {experience.map((e, i) => (
            <article
              key={`${e.company}-${i}`}
              className="rounded-lg border border-(--pf-border) p-4 bg-(--pf-surface) backdrop-blur-sm"
            >
              <div className="flex flex-wrap items-baseline gap-2">
                <h3 className="text-base font-semibold">{e.role}</h3>
                <span className="text-(--pf-muted)">·</span>
                {e.link ? (
                  <a
                    href={e.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm underline underline-offset-4"
                  >
                    {e.company}
                  </a>
                ) : (
                  <p className="text-sm">{e.company}</p>
                )}
              </div>

              <div className="mt-1 text-xs text-(--pf-muted)">
                {e.period ? <span>{e.period}</span> : null}
                {e.location ? (
                  <span>
                    {e.period ? " · " : ""}
                    {e.location}
                  </span>
                ) : null}
              </div>

              {e.achievements?.length ? (
                <ul className="mt-3 grid gap-2 list-disc pl-5 text-sm">
                  {e.achievements.map((a, idx) => (
                    <li key={idx}>{a}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
