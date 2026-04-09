# Starter Template — Claude Code Documentation

A production-ready Bun monorepo starter template with Next.js 15, a shared design system, tRPC, Prisma, and 6 OKLCH color themes.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 15 (App Router, Turbopack) |
| Language | TypeScript (strict mode) |
| API | tRPC 11 (type-safe RPC) |
| Database | Prisma 6 + PostgreSQL (any provider) |
| UI | React 19 + Radix UI + Tailwind CSS 4 |
| Animations | Framer Motion |
| Charts | Recharts 3 |
| Data Fetching | TanStack React Query (via tRPC) |
| Toasts | Sonner |
| Markdown | react-markdown |
| Themes | next-themes (dark/light) + custom 6-theme OKLCH system |
| Testing | Vitest 4 + @vitest/coverage-v8 |
| Package Manager | Bun (workspaces) |
| Code Quality | ESLint 9 + Prettier 3 + TypeScript-ESLint |

## Monorepo Topology

```
starter-template/          (Bun workspace root)
├── apps/
│   └── web/               @starter/web — Next.js 15 application
│       ├── src/
│       │   ├── app/                   # Next.js App Router
│       │   │   ├── (app)/             # Authenticated route group
│       │   │   │   ├── layout.tsx     # Auth shell (add auth check here)
│       │   │   │   └── dashboard/     # Example dashboard page
│       │   │   ├── (marketing)/       # Public route group
│       │   │   │   ├── layout.tsx     # Marketing header + footer
│       │   │   │   ├── about/         # Landing/about page
│       │   │   │   └── learn/         # Learning Hub
│       │   │   │       ├── page.tsx              # Hub grid
│       │   │   │       ├── getting-started/      # Article page
│       │   │   │       ├── core-concepts/        # Article page
│       │   │   │       └── advanced-topics/      # Article page
│       │   │   ├── _components/       # Page-specific components
│       │   │   │   ├── layout/        # MarketingHeader, AppSidebar, AppHeader, navItems
│       │   │   │   └── learn/         # LearnHub, LearnArticle, LearnBreadcrumb
│       │   │   ├── api/
│       │   │   │   └── trpc/[trpc]/   # tRPC HTTP handler
│       │   │   ├── layout.tsx         # Root layout (provider stack)
│       │   │   └── page.tsx           # Landing redirect
│       │   ├── components/            # App-specific components (empty initially)
│       │   ├── lib/
│       │   │   └── utils.ts           # cn(), formatCurrency(), sanitizeInput()
│       │   ├── server/
│       │   │   └── api/
│       │   │       ├── trpc.ts        # tRPC init, context, procedures
│       │   │       ├── root.ts        # Root router (merges sub-routers)
│       │   │       └── routers/
│       │   │           ├── item.ts    # Example CRUD router
│       │   │           └── learn.ts   # Learning hub content router
│       │   ├── trpc/
│       │   │   ├── react.tsx          # Client-side tRPC hooks
│       │   │   ├── server.ts          # Server-side tRPC caller (RSC)
│       │   │   ├── queryClient.ts     # React Query config
│       │   │   └── TRPCProvider.tsx   # Client provider wrapper
│       │   └── styles/
│       │       └── globals.css        # OKLCH theme definitions (all 6 themes)
│       ├── prisma/
│       │   └── schema.prisma          # User + Item models (output: generated/prisma)
│       ├── public/
│       ├── eslint.config.mjs
│       ├── .prettierrc
│       ├── tsconfig.json              # Strict mode, ~/* alias
│       ├── next.config.js
│       ├── vitest.config.ts
│       └── CLAUDE.md                  # App-specific AI guide
│
├── packages/
│   └── ui/                @starter/ui — Shared design system
│       ├── src/
│       │   ├── components/
│       │   │   ├── primitives/        # shadcn/ui base (Button, Card, Dialog, etc.)
│       │   │   └── composed/         # Higher-level components (StatCard, NumberInput, etc.)
│       │   ├── providers/             # ThemeProvider, ColorThemeProvider
│       │   ├── lib/
│       │   │   └── utils.ts           # cn() for the package
│       │   └── index.ts               # Main barrel export
│       ├── tsconfig.json
│       └── CLAUDE.md                  # Design system AI guide
│
├── .husky/
│   └── pre-push                       # typecheck && lint && test:run
├── .gitignore
├── package.json                       # Bun workspaces root
├── CLAUDE.md                          # ← You are here
└── docs/
    └── plans/                         # Design documents
```

## Package Relationships

```
@starter/web ──imports──> @starter/ui
                            ├── /primitives  (Button, Card, Dialog, etc.)
                            ├── /composed    (StatCard, NumberInput, etc.)
                            └── /providers   (ThemeProvider, ColorThemeProvider)
```

## If You're Doing X, Read Y

| Task | Read this CLAUDE.md |
|------|---------------------|
| Adding a UI component | `packages/ui/CLAUDE.md` |
| Adding a page or route | `apps/web/CLAUDE.md` |
| Adding a tRPC router | `apps/web/CLAUDE.md` |
| Modifying the database schema | `apps/web/CLAUDE.md` (Prisma section) |
| Changing theme colors | `packages/ui/CLAUDE.md` (Theme section) |
| Adding a new package to the monorepo | This file (Topology section) |

## Development Commands

```bash
# From monorepo root
bun install              # Install all dependencies
bun dev                  # Start apps/web dev server (Turbopack, port 3000)
bun build                # Production build
bun lint                 # ESLint across all packages
bun typecheck            # TypeScript check across all packages
bun test:run             # Run all tests

# From apps/web/
bun dev                  # Next.js with Turbopack on port 3000
bun run dev:stable       # Next.js without Turbopack
bun run dev:clean        # Clear .next cache, then start dev
bun run build            # Production build (includes prisma generate)
bun start                # Run production build
bun run typecheck        # TypeScript type check
bun run lint             # ESLint
bun test                 # Vitest watch mode
bun run test:run         # Vitest single run (CI mode)
bun run test:coverage    # Test coverage report
bun run format           # Prettier --write
bun run format:check     # Prettier --check
bun run db:push          # Push Prisma schema to database
bun run db:studio        # Open Prisma Studio GUI
bun run db:generate      # Create Prisma migration (dev)
bun run db:migrate       # Deploy migrations (production)
```

## Global Rules (Apply Everywhere)

### Import Conventions
- In `apps/web`: Use `~/*` path alias (e.g., `import { api } from "~/trpc/react"`)
- In `apps/web`: Use `@starter/ui`, `@starter/ui/primitives`, `@starter/ui/composed`, `@starter/ui/providers` for design system
- In `packages/ui`: Use relative imports only (e.g., `../../lib/utils`)
- Never use relative imports above 2 levels in apps/web — use the `~/*` alias instead

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Component files | PascalCase | `StatCard.tsx` |
| Utility/hook files | camelCase | `utils.ts`, `useMobile.ts` |
| React components | PascalCase | `StatCard`, `ThemeToggle` |
| Functions/hooks | camelCase | `useColorTheme`, `formatCurrency` |
| Variables | camelCase | `currentMonth`, `isLoading` |
| Constants | SCREAMING_SNAKE_CASE | `MAX_RETRIES`, `API_BASE_URL` |
| Types/Interfaces | PascalCase | `StatCardProps`, `ColorThemeId` |
| CSS classes | kebab-case (Tailwind) | `bg-primary`, `text-muted-foreground` |

### Code Quality
- **TypeScript strict mode** — No `any` types (`@typescript-eslint/no-explicit-any: "error"`)
- **Never use `eslint-disable` comments** — fix the underlying issue
- `"use client"` only when needed (hooks, event handlers, browser APIs)
- Prefer Server Components for data fetching
- Co-locate tests next to source files as `*.test.ts(x)`

### AI-Readable Code Comments
- **Section comments** — Label logical blocks (e.g., `// Hub grid layout`, `// Provider stack`)
- **Why comments** — Explain non-obvious logic and business rules
- **Insertion markers** — `// [MARKER_NAME]` comments where new code should be added
- **Skip the obvious** — Don't comment self-explanatory code

### Insertion Markers Reference

| Marker | File | Purpose |
|--------|------|---------|
| `[REGISTER_ROUTER]` | `apps/web/src/server/api/root.ts` | Register new tRPC routers |
| `[ADD_PROCEDURE]` | `apps/web/src/server/api/trpc.ts` | Add new procedure types |
| `[EXPORT_PRIMITIVE]` | `packages/ui/src/components/primitives/index.ts` | Export new primitives |
| `[EXPORT_COMPONENT]` | `packages/ui/src/components/composed/index.ts` | Export new composed components |
| `[ADD_NAV_SECTION]` | `apps/web/src/app/_components/layout/navItems.ts` | Add new navigation sections |

## Adding New Features

### New tRPC Router

1. Create `apps/web/src/server/api/routers/newfeature.ts`
2. Use `publicProcedure` (or `protectedProcedure` when auth is added)
3. Register in `apps/web/src/server/api/root.ts` above `[REGISTER_ROUTER]`
4. Use in components via `api.newfeature.procedureName.useQuery/useMutation()`
5. Update this CLAUDE.md: add to Project Structure tree

### New Database Model

1. Add model to `apps/web/prisma/schema.prisma`
2. Run `bun run db:push` (dev) or create migration
3. Create tRPC router for CRUD operations
4. Update this CLAUDE.md: add to schema documentation

### New Page

1. **Authenticated page:** `src/app/(app)/newpage/page.tsx`
2. **Public page:** `src/app/(marketing)/newpage/page.tsx`
3. Page-specific components: `src/app/_components/newpage/`
4. Every page must export `metadata` for SEO
5. Update this CLAUDE.md: add to Project Structure tree

### New UI Component

See `packages/ui/CLAUDE.md` for component creation checklist.

### New Monorepo Package

1. Create `packages/newpkg/` with `package.json` (name: `@starter/newpkg`)
2. Add `tsconfig.json`
3. Add exports in `package.json`
4. Consumer apps import via `@starter/newpkg`
5. Update this CLAUDE.md: add to Topology section

## Environment Variables

| Variable | Required | Purpose |
|----------|----------|---------|
| `DATABASE_URL` | Yes | PostgreSQL connection string |

See `apps/web/.env.example` for the full list including optional variables.

## Quality Gates

### Pre-push Hook (`.husky/pre-push`)
```bash
cd apps/web && bun run typecheck && bun run lint && bun run test:run
```
Blocks `git push` if any check fails. No pre-commit hook — commit freely.

### Test Patterns
- Tests co-located as `file.test.ts(x)` next to source
- Vitest with `environment: "node"` (no DOM/jsdom)
- `~` alias resolves in tests (configured in `vitest.config.ts`)
- `describe`, `it`, `expect` globally available (Vitest globals enabled)

## Architecture Decision Records

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Monorepo tool | Bun workspaces | Simple, fast, no extra tooling (no Turborepo/Nx) |
| Design system package | `@starter/ui` with barrel exports | AI agents can discover all components via index.ts |
| Theme system | OKLCH CSS variables + data-attribute | Zero JS on first paint, no FOUC, works with SSR |
| Database output path | `generated/prisma` (non-default) | Keeps generated code outside src/ |
| Pre-push not pre-commit | Husky pre-push only | Fast commit flow, quality gated at push time |
| Path alias | `~/*` → `./src/*` | Clean imports, consistent across codebase |
| No auth in template | Omitted NextAuth | Reduces setup friction; commented examples show how to add |
