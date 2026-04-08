import type { Metadata } from "next";
import { LearnArticle } from "~/app/_components/learn/LearnArticle";
import { LearnBreadcrumb } from "~/app/_components/learn/LearnBreadcrumb";

export const metadata: Metadata = {
  title: "Advanced Topics",
  description:
    "Customize the template, extend its functionality, and optimize for production.",
};

export default function AdvancedTopicsPage() {
  return (
    <div>
      <LearnBreadcrumb current="Advanced Topics" />
      <LearnArticle title="Advanced Topics" readTime="10 min read">
        <h2>Adding Authentication</h2>
        <p>The template is pre-wired for NextAuth.js. To enable auth:</p>
        <ol>
          <li>
            Install <code>next-auth</code> and configure providers
          </li>
          <li>
            Uncomment the session injection in <code>src/server/api/trpc.ts</code>
          </li>
          <li>
            Add <code>protectedProcedure</code> for authenticated endpoints
          </li>
          <li>
            Wrap the <code>(app)/</code> layout with an auth check
          </li>
        </ol>

        <h2>Custom Theme Creation</h2>
        <p>To add a new color theme:</p>
        <ol>
          <li>
            Define light and dark mode variables in <code>globals.css</code>
          </li>
          <li>Add the theme ID to the ColorThemeProvider</li>
          <li>
            Use the <code>[data-color-theme=&quot;your-theme&quot;]</code> selector pattern
          </li>
        </ol>

        <h2>Database Migrations</h2>
        <p>For production deployments, use Prisma Migrate:</p>
        <ul>
          <li>
            <code>prisma migrate dev</code> - Create and apply migrations locally
          </li>
          <li>
            <code>prisma migrate deploy</code> - Apply pending migrations in CI/CD
          </li>
        </ul>

        <h2>Performance Optimization</h2>
        <ul>
          <li>
            Use <code>next/dynamic</code> for heavy components
          </li>
          <li>Leverage Server Components for data fetching</li>
          <li>Configure image optimization with AVIF/WebP formats</li>
          <li>Enable React Query&apos;s stale-while-revalidate caching</li>
        </ul>

        <h2>Extending the Template</h2>
        <p>The codebase uses insertion markers for easy extension:</p>
        <ul>
          <li>
            <code>{`// [REGISTER_ROUTER]`}</code> - Add new tRPC routers
          </li>
          <li>
            <code>{`// [ADD_PROCEDURE]`}</code> - Add new procedure types
          </li>
          <li>
            <code>{`// [EXPORT_PRIMITIVE]`}</code> - Add new UI component exports
          </li>
        </ul>
      </LearnArticle>
    </div>
  );
}
