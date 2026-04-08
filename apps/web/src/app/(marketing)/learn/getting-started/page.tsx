import type { Metadata } from "next";
import { LearnArticle } from "~/app/_components/learn/LearnArticle";
import { LearnBreadcrumb } from "~/app/_components/learn/LearnBreadcrumb";

export const metadata: Metadata = {
  title: "Getting Started",
  description: "Set up your development environment and create your first feature in minutes.",
};

export default function GettingStartedPage() {
  return (
    <div>
      <LearnBreadcrumb current="Getting Started" />
      <LearnArticle title="Getting Started" readTime="5 min read">
        <h2>Prerequisites</h2>
        <p>Before you begin, make sure you have the following installed:</p>
        <ul>
          <li>
            <strong>Node.js</strong> 20+ or <strong>Bun</strong> 1.0+
          </li>
          <li>
            <strong>PostgreSQL</strong> (or use the provided Docker Compose setup)
          </li>
          <li>A code editor like VS Code</li>
        </ul>

        <h2>Quick Setup</h2>
        <ol>
          <li>Clone the repository and install dependencies</li>
          <li>
            Copy <code>.env.example</code> to <code>.env</code> and fill in your database URL
          </li>
          <li>
            Run <code>prisma db push</code> to set up your database schema
          </li>
          <li>
            Start the dev server with <code>bun dev</code>
          </li>
        </ol>

        <h2>Your First Feature</h2>
        <p>
          The template comes with an example Item model and CRUD router. To add a new feature:
        </p>
        <ol>
          <li>
            Define your model in <code>prisma/schema.prisma</code>
          </li>
          <li>
            Create a tRPC router in <code>src/server/api/routers/</code>
          </li>
          <li>
            Register the router in <code>src/server/api/root.ts</code>
          </li>
          <li>
            Build your UI using components from <code>@starter/ui</code>
          </li>
        </ol>

        <h2>Project Structure</h2>
        <p>The monorepo is organized into apps and packages:</p>
        <ul>
          <li>
            <code>apps/web</code> - The Next.js application
          </li>
          <li>
            <code>packages/ui</code> - Shared UI component library
          </li>
        </ul>
      </LearnArticle>
    </div>
  );
}
