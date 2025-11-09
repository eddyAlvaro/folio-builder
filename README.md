# folio-builder

Library-like React components to build customizable portfolios with Tailwind v4 and theme tokens.

## Dev

- `pnpm dev` to run locally
- `pnpm build` for production build

## Theming

All styles are scoped under a `.pf` root and defined in a `@layer pf` to avoid clashes and allow safe overrides. Components consume CSS variables only — no hardcoded colors.

Tokens exposed today:

- `--pf-bg` page background
- `--pf-fg` foreground text
- `--pf-muted` muted text
- `--pf-accent` accent color
- `--pf-surface` cards/surfaces background
- `--pf-border` border color
- `--pf-radius` border radius
- `--pf-shadow` shadow value

Built-in themes: `minimal`, `dark`. Example custom theme included: `pf-theme-rose`.

Usage:

- Root wrapper applies theme classes: `className={getThemeClass('dark')}` which returns `"pf pf-theme-dark"`.
- Override tokens inline:
  - `<PortfolioLayout style={{ ['--pf-accent']: '#ff6b6b' }} />`
- Or extend via CSS (loaded after library CSS):
  - `@layer pf { .pf.pf-theme-mybrand { --pf-accent:#ff6b6b; --pf-surface:#101010; } }`
  - `<PortfolioLayout theme="minimal" className="pf-theme-mybrand" />`
