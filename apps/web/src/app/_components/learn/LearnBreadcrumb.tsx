import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "~/lib/utils";

interface LearnBreadcrumbProps {
  current: string;
  className?: string;
}

/**
 * Breadcrumb navigation for the learn section.
 * Always links back to the Learning Hub with the current page title.
 */
export function LearnBreadcrumb({ current, className }: LearnBreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("flex items-center gap-1.5 text-sm text-muted-foreground", className)}
    >
      <Link href="/learn" className="transition-colors hover:text-foreground">
        Learning Hub
      </Link>
      <ChevronRight className="h-3.5 w-3.5" />
      <span className="font-medium text-foreground">{current}</span>
    </nav>
  );
}
