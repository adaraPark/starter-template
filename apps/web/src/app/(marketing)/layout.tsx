import Link from "next/link";
import { MarketingHeader } from "~/app/_components/layout/MarketingHeader";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <MarketingHeader />
      <main className="flex-1">{children}</main>
      <footer className="border-t border-border bg-muted/30">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 text-sm text-muted-foreground">
          <p>Built with the Starter Template</p>
          <nav className="flex gap-4">
            <Link href="/learn" className="transition-colors hover:text-foreground">
              Learn
            </Link>
            <Link href="/about" className="transition-colors hover:text-foreground">
              About
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
