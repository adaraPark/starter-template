import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@starter/ui/primitives";
import { FloatingThemeToggle } from "~/app/_components/layout/FloatingThemeToggle";
import { AnimatedHero } from "~/app/_components/layout/AnimatedHero";

export const metadata: Metadata = {
  title: "Starter Template",
  description: "A production-ready monorepo with everything you need to ship fast.",
};

export default function HomePage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-4">
      <FloatingThemeToggle />
      {/* Hero section */}
      <AnimatedHero>
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-display text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
            Starter Template
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            A production-ready monorepo with Next.js 15, tRPC, Prisma, and a shared design system.
            Everything you need to ship fast.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/learn">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          </div>
        </div>
      </AnimatedHero>

      {/* Tech stack badges */}
      <div className="mt-16 flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
        {["Next.js 15", "React 19", "tRPC 11", "Prisma 6", "Tailwind CSS 4", "TypeScript"].map(
          (tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-secondary/50 px-3 py-1"
            >
              {tech}
            </span>
          ),
        )}
      </div>
    </main>
  );
}
