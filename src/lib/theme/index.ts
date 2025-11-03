const THEMES: Record<string, string> = {
  minimal: "pf-theme-minimal",
  dark: "pf-theme-dark",
};

export function getThemeClass(theme?: string) {
  return THEMES[theme || "minimal"];
}
