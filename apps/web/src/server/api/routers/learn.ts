import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

const topics = [
  {
    slug: "getting-started",
    title: "Getting Started",
    description:
      "Set up your development environment and create your first feature in minutes.",
    readTime: "5 min read",
  },
  {
    slug: "core-concepts",
    title: "Core Concepts",
    description:
      "Understand the architecture patterns, key abstractions, and how everything fits together.",
    readTime: "8 min read",
  },
  {
    slug: "advanced-topics",
    title: "Advanced Topics",
    description:
      "Customize the template, extend its functionality, and optimize for production.",
    readTime: "10 min read",
  },
];

const topicContent: Record<string, { title: string; content: string; readTime: string }> = {
  "getting-started": {
    title: "Getting Started",
    readTime: "5 min read",
    content: `
## Prerequisites

Before you begin, make sure you have the following installed:
- **Node.js** 20+ or **Bun** 1.0+
- **PostgreSQL** (or use the provided Docker Compose setup)
- A code editor like VS Code

## Quick Setup

1. Clone the repository and install dependencies
2. Copy \`.env.example\` to \`.env\` and fill in your database URL
3. Run \`prisma db push\` to set up your database schema
4. Start the dev server with \`bun dev\`

## Your First Feature

The template comes with an example Item model and CRUD router. To add a new feature:

1. Define your model in \`prisma/schema.prisma\`
2. Create a tRPC router in \`src/server/api/routers/\`
3. Register the router in \`src/server/api/root.ts\`
4. Build your UI using components from \`@starter/ui\`

## Project Structure

The monorepo is organized into apps and packages:
- \`apps/web\` - The Next.js application
- \`packages/ui\` - Shared UI component library
    `,
  },
  "core-concepts": {
    title: "Core Concepts",
    readTime: "8 min read",
    content: `
## Architecture Overview

This template follows a layered architecture with clear separation of concerns:

### Route Groups

Next.js route groups separate authenticated and public pages:
- \`(app)/\` - Authenticated pages behind auth middleware
- \`(marketing)/\` - Public pages with marketing layout

### Type-Safe API Layer

tRPC provides end-to-end type safety from your database to your UI:
- Define procedures with Zod validation
- Call them with full TypeScript autocomplete
- No code generation or API schemas to maintain

### Component Architecture

Components are organized into three tiers:
1. **Primitives** (\`@starter/ui/primitives\`) - Base UI components (Button, Card, Input)
2. **Composed** (\`@starter/ui/composed\`) - Higher-level patterns (StatCard, DataTable)
3. **Page Components** (\`_components/\`) - Page-specific, co-located components

### Theme System

The app supports 6 color themes with light and dark modes:
- Themes are defined as CSS custom properties in OKLCH color space
- Color theme selection is managed via React Context
- Light/dark mode is handled by next-themes

### Data Flow

Server Components fetch data directly via the server-side tRPC caller.
Client Components use React Query hooks via the tRPC React integration.
    `,
  },
  "advanced-topics": {
    title: "Advanced Topics",
    readTime: "10 min read",
    content: `
## Adding Authentication

The template is pre-wired for NextAuth.js. To enable auth:

1. Install \`next-auth\` and configure providers
2. Uncomment the session injection in \`src/server/api/trpc.ts\`
3. Add \`protectedProcedure\` for authenticated endpoints
4. Wrap the \`(app)/\` layout with an auth check

## Custom Theme Creation

To add a new color theme:

1. Define light and dark mode variables in \`globals.css\`
2. Add the theme ID to the ColorThemeProvider
3. Use the \`[data-color-theme="your-theme"]\` selector pattern

## Database Migrations

For production deployments, use Prisma Migrate:
- \`prisma migrate dev\` - Create and apply migrations locally
- \`prisma migrate deploy\` - Apply pending migrations in CI/CD

## Performance Optimization

- Use \`next/dynamic\` for heavy components
- Leverage Server Components for data fetching
- Configure image optimization with AVIF/WebP formats
- Enable React Query's stale-while-revalidate caching

## Extending the Template

The codebase uses insertion markers for easy extension:
- \`// [REGISTER_ROUTER]\` - Add new tRPC routers
- \`// [ADD_PROCEDURE]\` - Add new procedure types
- \`// [EXPORT_PRIMITIVE]\` - Add new UI component exports
    `,
  },
};

export const learnRouter = createTRPCRouter({
  getTopics: publicProcedure.query(() => {
    return topics;
  }),

  getBySlug: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(({ input }) => {
      return topicContent[input.slug] ?? null;
    }),
});
