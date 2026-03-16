import React from "react";
import type { PortfolioData } from "../types/portfolio";
import { getThemeClass } from "../theme";
import type { SectionId, SectionInstance } from "../types/sections";
import { mergeRegistry } from "./sections/registry";
import { cn } from "../utils/cn";

const DEFAULT_ORDER: SectionId[] = [
  "hero",
  "about",
  "projects",
  "skills",
  "experience",
  "contact",
];

const BENTO_SLOTS: Partial<Record<SectionId, string>> = {
  hero: "md:col-span-12",
  about: "md:col-span-4",
  projects: "md:col-span-8",
  skills: "md:col-span-4",
  experience: "md:col-span-8",
  contact: "md:col-span-12",
};

type LayoutKind = "bento" | "stacked";

interface Props {
  data: PortfolioData;
  theme: "minimal" | "dark" | "rose" | "slate";
  sections?: SectionInstance[];
  layout?: LayoutKind;
  registry?: Partial<
    Record<
      SectionId,
      (ctx: {
        data: PortfolioData;
        instance: SectionInstance;
      }) => React.ReactNode
    >
  >;
  className?: string;
  style?: React.CSSProperties;
}
export const PortfolioLayout: React.FC<Props> = ({
  data,
  theme = "dark",
  sections,
  layout,
  registry,
  className,
  style,
}) => {
  const mergedRegistry = mergeRegistry(registry);
  const list: SectionInstance[] =
    sections?.filter((s) => !s.hidden) ?? DEFAULT_ORDER.map((id) => ({ id }));
  return (
    <div className={cn(getThemeClass(theme), className)} style={style}>
      {layout === "stacked" ? (
        <div>
          {list.map((inst, i) => (
            <div key={`${inst.id}-${i}`} className={cn(inst.className)}>
              {mergedRegistry[inst.id]({ data, instance: inst })}
            </div>
          ))}
        </div>
      ) : (
        <div className="max-w-6xl mx-auto px-4 py-6 grid gap-4 grid-cols-1 md:grid-cols-12">
          {list.map((inst, i) => {
            const slot =
              inst.slotClassName ?? BENTO_SLOTS[inst.id] ?? "md:col-span-12";
            return (
              <div key={`${inst.id}-${i}`} className={cn(slot, inst.className)}>
                {mergedRegistry[inst.id]({ data, instance: inst })}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
