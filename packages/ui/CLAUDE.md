# @starter/ui — Design System AI Guide

Shared component library and theme system for the starter-template monorepo.

## Package Structure

```
packages/ui/src/
├── components/
│   ├── primitives/           # shadcn/ui base components (Radix UI wrappers)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── badge.tsx
│   │   ├── separator.tsx
│   │   ├── dialog.tsx
│   │   ├── tooltip.tsx
│   │   ├── tabs.tsx
│   │   ├── select.tsx
│   │   ├── switch.tsx
│   │   ├── dropdown-menu.tsx
│   │   └── index.ts          # Barrel export — [EXPORT_PRIMITIVE] marker
│   └── composed/             # Higher-level composed components
│       ├── StatCard.tsx       # StatCard + MiniStat
│       ├── NumberInput.tsx    # Formatted number input with prefix/suffix
│       ├── StatusBadge.tsx    # StatusBadge + ProgressStatus
│       ├── ChartContainer.tsx # Recharts ResponsiveContainer wrapper
│       ├── ChartSkeleton.tsx  # Chart loading skeleton
│       ├── ChartEmpty.tsx     # Chart empty state
│       ├── ConfirmDialog.tsx  # Confirm/alert dialog pattern
│       ├── CollapsibleDisclaimer.tsx  # Expandable info block
│       ├── MiniProgressBar.tsx # Compact progress bar
│       └── index.ts          # Barrel export — [EXPORT_COMPONENT] marker
├── providers/
│   ├── themeProvider.tsx      # next-themes wrapper (dark/light/system)
│   ├── colorThemeProvider.tsx # Custom color theme context (6 themes)
│   └── index.ts              # Barrel export
├── lib/
│   └── utils.ts              # cn() utility
└── index.ts                  # Main barrel (re-exports everything)
```

## Import Patterns

Consumers import from three entry points:

```typescript
// Individual layers
import { Button, Card } from "@starter/ui/primitives";
import { StatCard, NumberInput } from "@starter/ui/composed";
import { ThemeProvider, ColorThemeProvider } from "@starter/ui/providers";

// Or everything from main entry
import { Button, StatCard, ThemeProvider, cn } from "@starter/ui";
```

## Theme System

### 6 Color Themes (OKLCH)

| Theme | ID | Selector | Palette |
|-------|----|----------|---------|
| Ember 🔥 | `ember` | `:root` (default) | Warm orange/gold |
| Barbie 💖 | `barbie` | `[data-color-theme="barbie"]` | Pink/purple |
| Forest 🌲 | `forest` | `[data-color-theme="forest"]` | Green/nature |
| Ocean 🌊 | `ocean` | `[data-color-theme="ocean"]` | Blue/aqua |
| Gold ✨ | `gold` | `[data-color-theme="gold"]` | Luxe golden |
| Royalty 👑 | `purple` | `[data-color-theme="purple"]` | Vibrant violet |

### How Themes Work

1. CSS defines all 6 themes in `apps/web/src/styles/globals.css` using `:root` + `[data-color-theme]` selectors
2. Each theme defines light mode vars directly and dark mode via `.dark` compound selector
3. `ColorThemeProvider` manages the `data-color-theme` attribute on `<html>`
4. Ember is the default — removing the attribute falls back to `:root`
5. Theme choice persists in `localStorage` under key `starter-color-theme`

### CSS Variable Reference

Every theme defines these variables:

| Variable | Purpose |
|----------|---------|
| `--background` / `--foreground` | Page background and text |
| `--card` / `--card-foreground` | Card surfaces |
| `--popover` / `--popover-foreground` | Popover/dropdown surfaces |
| `--primary` / `--primary-foreground` | Primary actions and emphasis |
| `--secondary` / `--secondary-foreground` | Secondary surfaces |
| `--muted` / `--muted-foreground` | Muted/subtle elements |
| `--accent` / `--accent-foreground` | Accent highlights |
| `--destructive` | Destructive/danger actions |
| `--border` / `--input` / `--input-background` | Form elements |
| `--ring` | Focus ring color |
| `--chart-1` through `--chart-5` | Semantic chart colors |
| `--sidebar-*` | Sidebar-specific overrides |
| `--ember` / `--ember-foreground` | Brand color (adapts per theme) |
| `--flame` | Secondary brand color |
| `--success` / `--success-foreground` | Success state |
| `--warning` / `--warning-foreground` | Warning state |

**CRITICAL:** Before modifying theme blocks in globals.css, read the FULL theme section. Partial edits break the OKLCH cascade — every theme must define ALL variables.

## Adding a New Primitive

1. Create `src/components/primitives/newcomponent.tsx`
2. Follow shadcn/ui conventions (Radix UI + CVA + cn())
3. Export from `src/components/primitives/index.ts` above `[EXPORT_PRIMITIVE]`
4. Component must accept `className` prop

## Adding a New Composed Component

Checklist:
- [ ] Create `src/components/composed/NewComponent.tsx`
- [ ] Accept `className` prop for Tailwind overrides
- [ ] Use `cn()` from `../../lib/utils` for class merging
- [ ] Import primitives from `../primitives/` (not Radix directly)
- [ ] Co-locate test as `NewComponent.test.tsx`
- [ ] Export from `src/components/composed/index.ts` above `[EXPORT_COMPONENT]`
- [ ] Add to this CLAUDE.md structure tree

## Component Conventions

### Props
- Always accept `className` for Tailwind overrides
- Use `variant` for visual variants (e.g., `"default" | "destructive"`)
- Use `size` for sizing variants (e.g., `"sm" | "md" | "lg"`)
- Optional props should have sensible defaults

### Styling
- Use Tailwind classes referencing CSS variables (e.g., `bg-primary`, `text-muted-foreground`)
- Use `cn()` to merge className prop with base styles
- Never use inline styles for colors — always go through the theme variables
- Components automatically adapt to whichever theme is active

### Imports (IMPORTANT)
- This package uses **relative imports only** — never use `~/*` or `@starter/*`
- Import utils: `import { cn } from "../../lib/utils"`
- Import primitives: `import { Button } from "../primitives/button"`
- This is a package consumed by apps, not an app itself

### Barrel Exports
- Every directory has an `index.ts` barrel export
- **Always check `index.ts` before assuming a component isn't exported**
- The main `src/index.ts` re-exports from all subdirectories
