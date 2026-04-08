# @starter/web — App AI Guide

Next.js 15 application with tRPC, Prisma, and the @starter/ui design system.

## Route Map

### Authenticated Routes — `src/app/(app)/`
Layout enforces auth (add check when NextAuth is configured) and renders app shell.

| Route | Page | Data Dependencies |
|-------|------|-------------------|
| `/dashboard` | Dashboard with stat cards | None (example data) |

### Public Routes — `src/app/(marketing)/`
Layout renders marketing header and footer.

| Route | Page | Data Dependencies |
|-------|------|-------------------|
| `/about` | Landing/about page | None |
| `/learn` | Learning Hub grid | `learn.getTopics` |
| `/learn/getting-started` | Getting Started article | `learn.getBySlug` |
| `/learn/core-concepts` | Core Concepts article | `learn.getBySlug` |
| `/learn/advanced-topics` | Advanced Topics article | `learn.getBySlug` |

### Root-level
| Route | Page | Notes |
|-------|------|-------|
| `/` | Landing page | Hero + CTA buttons |

## Adding a New Page

### Authenticated page
1. Create `src/app/(app)/newpage/page.tsx`
2. Export metadata: `export const metadata = { title: "Page Title" }`
3. Page-specific components → `src/app/_components/newpage/`

### Public page
1. Create `src/app/(marketing)/newpage/page.tsx`
2. Export metadata
3. Add nav link in `src/app/(marketing)/layout.tsx`

## tRPC

### Routers

| Router | Procedures | Purpose |
|--------|-----------|---------|
| `item` | `getAll`, `getById`, `create`, `delete` | Example CRUD |
| `learn` | `getTopics`, `getBySlug` | Learning hub content |

### Adding a New Router

1. Create `src/server/api/routers/newfeature.ts`
2. Use `publicProcedure` (or `protectedProcedure` when auth added)
3. Register in `src/server/api/root.ts`:
   ```typescript
   import { newfeatureRouter } from "./routers/newfeature";
   // Add above [REGISTER_ROUTER] marker
   ```
4. Client usage: `api.newfeature.procedureName.useQuery()`
5. Server usage (RSC): `const data = await api.newfeature.procedureName({ ... })`

### Router Template
```typescript
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const newfeatureRouter = createTRPCRouter({
  getAll: publicProcedure.query(async () => {
    // TODO: Wire up Prisma — return ctx.db.model.findMany()
    return [];
  }),

  create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ input }) => {
      // TODO: Wire up Prisma — return ctx.db.model.create({ data: input })
      return { id: "new", ...input };
    }),
});
```

### Client Data Fetching
```typescript
"use client";
import { api } from "~/trpc/react";

export function MyComponent() {
  const { data, isLoading } = api.item.getAll.useQuery();
  const utils = api.useUtils();
  const createMutation = api.item.create.useMutation({
    onSuccess: () => void utils.item.getAll.invalidate(),
  });
}
```

### Server Data Fetching (RSC)
```typescript
import { api } from "~/trpc/server";

export default async function Page() {
  const items = await api.item.getAll();
  return <div>{items.length} items</div>;
}
```

## Prisma

### Schema Location
`prisma/schema.prisma` — generates to `generated/prisma` (non-default path)

### Current Models

| Model | Fields | Purpose |
|-------|--------|---------|
| `User` | id, email, name, items[], createdAt, updatedAt | User account |
| `Item` | id, title, description, status, userId, createdAt, updatedAt | Example entity |

### Adding a New Model

1. Add model to `prisma/schema.prisma`
2. Run `bun run db:push` (local dev)
3. Create tRPC router for CRUD
4. Register router in `root.ts`

### Naming Conventions
- Models: **PascalCase** (`UserProfile`)
- Fields: **camelCase** (`createdAt`)
- Enums: **PascalCase** name, **UPPER_SNAKE_CASE** values

## Provider Stack (Root Layout)

```
ThemeProvider (next-themes: dark/light/system)
  → ColorThemeProvider (custom color themes via data-attribute)
    → TRPCProvider (tRPC + React Query)
      → Toaster (sonner)
```

When you add auth, insert SessionProvider after ColorThemeProvider.

## Environment Variables

| Variable | Required | Purpose |
|----------|----------|---------|
| `DATABASE_URL` | Yes | PostgreSQL connection string |

See `.env.example` for optional variables (auth, AI, etc.)

## File Conventions

- `src/app/` — Route pages and layouts only
- `src/app/_components/` — Page-specific components, organized by page
- `src/components/` — App-wide shared components (not in @starter/ui)
- `src/lib/` — Utilities, hooks, helpers
- `src/server/` — Server-only code (tRPC, auth, db)
- `src/trpc/` — tRPC client setup (react hooks, server caller, provider)

## Imports

```typescript
// Design system (shared package)
import { Button, Card } from "@starter/ui/primitives";
import { StatCard, NumberInput } from "@starter/ui/composed";
import { ThemeProvider, ColorThemeProvider } from "@starter/ui/providers";

// App internals (path alias)
import { api } from "~/trpc/react";
import { cn } from "~/lib/utils";
```
