# Starter Template

A production-ready Bun monorepo starter template with Next.js 15, a shared design system, tRPC, Prisma, and 6 OKLCH color themes.

## Quick Start

```bash
# Clone and install
git clone git@github.com:adaraPark/starter-template.git
cd starter-template
bun install

# Start development
cd apps/web
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 15 (App Router, Turbopack) |
| Language | TypeScript (strict mode) |
| API | tRPC 11 |
| Database | Prisma 6 + PostgreSQL |
| UI | React 19 + Radix UI + Tailwind CSS 4 |
| Design System | `@starter/ui` (24 shadcn primitives + 11 composed components) |
| Themes | 6 OKLCH color themes with dark/light mode |
| Charts | Recharts 3 |
| Animations | Framer Motion |
| Testing | Vitest 4 |
| Package Manager | Bun (workspaces) |

## Monorepo Structure

```
starter-template/
├── apps/
│   └── web/              # Next.js 15 application
├── packages/
│   └── ui/               # Shared design system (@starter/ui)
├── .claude/              # AI skills + settings
├── .github/workflows/    # CI pipeline
└── docs/plans/           # Design documents
```

## Features

- **6 Color Themes** — Ember, Barbie, Forest, Ocean, Gold, Royalty (OKLCH)
- **24 shadcn/ui Primitives** — Button, Card, Dialog, Sheet, Table, Command, and more
- **11 Composed Components** — StatCard, ThemeToggle, ChartContainer, ConfirmDialog, etc.
- **tRPC + Prisma** — Type-safe API with example CRUD router
- **Learning Hub** — 3 example articles with educational content
- **Dashboard** — Stat cards, charts, progress bars, toast notifications
- **AI-Native** — 3-layer CLAUDE.md system with insertion markers
- **Quality Gates** — ESLint 9, Prettier 3, TypeScript strict, Husky pre-push, Vitest

## Development

```bash
# From monorepo root
bun dev          # Start web app (port 3000)
bun build        # Production build
bun lint         # ESLint
bun typecheck    # TypeScript check
bun test:run     # Run tests

# Database (from apps/web)
bun run db:push  # Push Prisma schema
bun run db:studio # Open Prisma Studio
```

## Adding Features

### New Page
1. Create `apps/web/src/app/(app)/newpage/page.tsx` (authenticated) or `(marketing)/` (public)
2. Export metadata for SEO

### New API Endpoint
1. Create `apps/web/src/server/api/routers/newfeature.ts`
2. Register above `// [REGISTER_ROUTER]` in `root.ts`

### New UI Component
1. Create in `packages/ui/src/components/primitives/` or `composed/`
2. Export above `// [EXPORT_PRIMITIVE]` or `// [EXPORT_COMPONENT]`

See `CLAUDE.md` for full documentation.

## License

MIT
