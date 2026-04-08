import type { Metadata } from "next";
import { LearnHub } from "~/app/_components/learn/LearnHub";

export const metadata: Metadata = {
  title: "Learning Hub",
  description: "Guides and tutorials to help you get the most out of the Starter Template.",
};

const topics = [
  {
    slug: "getting-started",
    title: "Getting Started",
    description:
      "Set up your development environment and create your first feature in minutes.",
    readTime: "5 min read",
    icon: "rocket" as const,
  },
  {
    slug: "core-concepts",
    title: "Core Concepts",
    description:
      "Understand the architecture patterns, key abstractions, and how everything fits together.",
    readTime: "8 min read",
    icon: "layers" as const,
  },
  {
    slug: "advanced-topics",
    title: "Advanced Topics",
    description:
      "Customize the template, extend its functionality, and optimize for production.",
    readTime: "10 min read",
    icon: "settings" as const,
  },
];

export default function LearnPage() {
  return (
    <div>
      {/* Hero section */}
      <div className="mb-10 text-center">
        <h1 className="font-display text-4xl font-bold tracking-tight text-foreground">
          Learning Hub
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Everything you need to know to build with this template.
        </p>
      </div>

      {/* Topic grid */}
      <LearnHub topics={topics} />
    </div>
  );
}
