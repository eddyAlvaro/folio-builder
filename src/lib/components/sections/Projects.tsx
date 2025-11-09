import React from "react";
import type { PortfolioProject } from "../../types/portfolio";

interface Props {
  projects: PortfolioProject[];
  title?: string;
  variant?: "cards" | "gallery";
}

export const Projects: React.FC<Props> = ({
  projects,
  title = "Proyectos",
  variant = "cards",
}) => {
  if (!projects?.length) return null;

  const grid =
    variant === "gallery"
      ? "grid gap-3 sm:grid-cols-2 md:grid-cols-3"
      : "grid gap-6 sm:grid-cols-2 lg:grid-cols-3";
  return (
    <section aria-labelledby="projects-title" className="py-4">
      <div className="max-w-5xl mx-auto px-4">
        <h2 id="projects-title" className="text-2xl font-semibold mb-6">
          {title}
        </h2>
        <div className={grid}>
          {projects.map((p, idx) => (
            <article
              key={`${p.title}-${idx}`}
              className="rounded-lg border border-(--pf-border) overflow-hidden bg-(--pf-surface) backdrop-blur-sm shadow-sm"
            >
              {p.image ? (
                <div className="aspect-video bg-(--pf-fg)/5">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ) : null}

              <div className="p-4 flex flex-col gap-3">
                <h3 className="text-base font-semibold">{p.title}</h3>
                {p.description ? (
                  <p className="text-sm text-(--pf-muted) leading-relaxed">
                    {p.description}
                  </p>
                ) : null}

                {p.tags?.length ? (
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center rounded-md border border-(--pf-border) px-2 py-0.5 text-xs text-(--pf-fg)/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}

                {(p.link || p.repo) && (
                  <div className="mt-2 flex gap-3">
                    {p.link ? (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center rounded-md bg-(--pf-accent) text-white text-xs px-3 py-1.5 hover:opacity-90 transition"
                      >
                        Demo
                      </a>
                    ) : null}
                    {p.repo ? (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center rounded-md border border-(--pf-border) text-(--pf-fg)/80 text-xs px-3 py-1.5 hover:bg-(--pf-surface) transition"
                      >
                        Código
                      </a>
                    ) : null}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
