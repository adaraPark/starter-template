import { cn } from "~/lib/utils";

interface LearnArticleProps {
  title: string;
  readTime?: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Shared article layout for learn section pages.
 * Provides consistent typography and spacing for long-form content.
 */
export function LearnArticle({ title, readTime, children, className }: LearnArticleProps) {
  return (
    <article className={cn("mx-auto max-w-3xl py-8", className)}>
      {/* Article header */}
      <header className="mb-8">
        <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h1>
        {readTime && <p className="mt-2 text-sm text-muted-foreground">{readTime}</p>}
      </header>

      {/* Article body with prose-like styling */}
      <div
        className={cn(
          "space-y-4 text-foreground/90",
          "[&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground",
          "[&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-foreground",
          "[&_p]:leading-7",
          "[&_ul]:ml-6 [&_ul]:list-disc [&_ul]:space-y-2",
          "[&_ol]:ml-6 [&_ol]:list-decimal [&_ol]:space-y-2",
          "[&_li]:leading-7",
          "[&_code]:rounded [&_code]:bg-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-sm [&_code]:font-mono",
          "[&_strong]:font-semibold [&_strong]:text-foreground",
        )}
      >
        {children}
      </div>
    </article>
  );
}
