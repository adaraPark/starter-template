import type { Metadata } from "next";
import { LearnArticle } from "~/app/_components/learn/LearnArticle";
import { LearnBreadcrumb } from "~/app/_components/learn/LearnBreadcrumb";

export const metadata: Metadata = {
  title: "Core Concepts",
  description:
    "Understand the architecture patterns, key abstractions, and how everything fits together.",
};

export default function CoreConceptsPage() {
  return (
    <div>
      <LearnBreadcrumb current="Core Concepts" />
      <LearnArticle title="Core Concepts" readTime="8 min read">
        <h2>Architecture Overview</h2>
        <p>
          This template follows a layered architecture with clear separation of concerns between the
          API layer, UI components, and application logic.
        </p>

        <h2>Route Groups</h2>
        <p>Next.js route groups separate authenticated and public pages:</p>
        <ul>
          <li>
            <code>(app)/</code> - Authenticated pages behind auth middleware
          </li>
          <li>
            <code>(marketing)/</code> - Public pages with marketing layout
          </li>
        </ul>

        <h2>Type-Safe API Layer</h2>
        <p>tRPC provides end-to-end type safety from your database to your UI:</p>
        <ul>
          <li>Define procedures with Zod validation</li>
          <li>Call them with full TypeScript autocomplete</li>
          <li>No code generation or API schemas to maintain</li>
        </ul>

        <h2>Component Architecture</h2>
        <p>Components are organized into three tiers:</p>
        <ol>
          <li>
            <strong>Primitives</strong> (<code>@starter/ui/primitives</code>) - Base UI components
            like Button, Card, and Input
          </li>
          <li>
            <strong>Composed</strong> (<code>@starter/ui/composed</code>) - Higher-level patterns
            like StatCard and DataTable
          </li>
          <li>
            <strong>Page Components</strong> (<code>_components/</code>) - Page-specific, co-located
            components
          </li>
        </ol>

        <h2>Theme System</h2>
        <p>The app supports 6 color themes with light and dark modes:</p>
        <ul>
          <li>Themes are defined as CSS custom properties in OKLCH color space</li>
          <li>Color theme selection is managed via React Context</li>
          <li>Light/dark mode is handled by next-themes</li>
        </ul>

        <h2>Data Flow</h2>
        <p>
          Server Components fetch data directly via the server-side tRPC caller. Client Components
          use React Query hooks via the tRPC React integration.
        </p>
      </LearnArticle>
    </div>
  );
}
