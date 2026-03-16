export const THEMES: Record<string, string> = {
  minimal: "pf pf-theme-minimal",
  dark: "pf pf-theme-dark",
  rose: "pf pf-theme-rose",
  slate: "pf pf-theme-slate",
};

export function getThemeClass(theme?: string) {
  return THEMES[theme || "minimal"];
}
