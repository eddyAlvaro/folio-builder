import React from "react";
import type { PortfolioSkill } from "../../types/portfolio";

type Props = {
  skills: PortfolioSkill[];
  title?: string;
};

export const Skills: React.FC<Props> = ({ skills, title }) => {
  if (!skills?.length) return null;

  const byCategory = skills.reduce<Record<string, PortfolioSkill[]>>(
    (acc, s) => {
      const key = s.category || "General";
      (acc[key] ||= []).push(s);
      return acc;
    },
    {}
  );

  return (
    <section aria-labelledby="skills-title" className="py-4">
      <div className="max-w-6xl mx-auto px-4">
        <h2 id="skills-title" className="text-2xl font-semibold mb-6">
          {title}
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {Object.entries(byCategory).map(([cat, list]) => (
            <div
              key={cat}
              className="rounded-lg border border-(--pf-border) p-4"
            >
              <h3 className="text-sm font-medium mb-3 text-(--pf-muted)">
                {cat}
              </h3>

              <div className="flex flex-wrap gap-2">
                {list.map((s, i) =>
                  s.level ? (
                    <div key={`${s.name}-${i}`} className="w-full">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="font-medium">{s.name}</span>
                        <span className="text-(--pf-muted)">{s.level}/5</span>
                      </div>
                      <div className="h-2 rounded bg-(--pf-fg)/10 overflow-hidden">
                        <div
                          className="h-full bg-(--pf-accent)"
                          style={{ width: `${(s.level / 5) * 100}%` }}
                        />
                      </div>
                    </div>
                  ) : (
                    <span
                      key={`${s.name}-${i}`}
                      className="inline-flex items-center rounded-md border border-(--pf-border) px-2 py-0.5 text-xs"
                    >
                      {s.name}
                    </span>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
