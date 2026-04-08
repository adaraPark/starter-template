import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about the Starter Template — a production-ready monorepo for building modern web applications.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-display text-4xl font-bold tracking-tight text-foreground">
        About This Template
      </h1>
      <p className="mt-6 text-lg leading-8 text-muted-foreground">
        The Starter Template is a production-ready monorepo designed to help you ship modern web
        applications faster. It combines the best tools in the React ecosystem with sensible defaults
        and clean architecture patterns.
      </p>

      {/* Feature grid */}
      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        <FeatureBlock
          title="Type-Safe API"
          description="End-to-end type safety with tRPC. No code generation, no schemas to maintain — just TypeScript from database to UI."
        />
        <FeatureBlock
          title="Shared Design System"
          description="A complete component library with primitives and composed components, ready to customize with 6 built-in color themes."
        />
        <FeatureBlock
          title="Database Ready"
          description="Prisma ORM with PostgreSQL, including a schema, example models, and migration workflow already configured."
        />
        <FeatureBlock
          title="Production Optimized"
          description="Security headers, image optimization, code splitting, and testing infrastructure included from day one."
        />
      </div>
    </div>
  );
}

function FeatureBlock({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
    </div>
  );
}
