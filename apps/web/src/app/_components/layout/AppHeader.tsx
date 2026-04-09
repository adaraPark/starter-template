"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button, Sheet, SheetContent, SheetHeader, SheetTitle } from "@starter/ui/primitives";
import { ThemeToggle, ThemeSettingsPanel } from "@starter/ui/composed";
import { cn } from "~/lib/utils";
import { navSections } from "~/app/_components/layout/navItems";

export function AppHeader() {
  const [sheetOpen, setSheetOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="flex h-14 items-center border-b border-border bg-background px-4">
      {/* Mobile hamburger */}
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden"
        onClick={() => setSheetOpen(true)}
        aria-label="Open navigation"
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Spacer pushes ThemeToggle to the right */}
      <div className="flex-1" />

      {/* Theme toggle (always visible) */}
      <ThemeToggle />

      {/* Mobile drawer */}
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent side="left" className="w-72 p-0">
          <SheetHeader className="border-b border-sidebar-border px-4 py-4">
            <SheetTitle>
              <Link
                href="/"
                className="font-display text-lg font-bold text-foreground"
                onClick={() => setSheetOpen(false)}
              >
                Starter Template
              </Link>
            </SheetTitle>
          </SheetHeader>

          {/* Navigation */}
          <nav className="flex-1 space-y-4 overflow-y-auto p-4">
            {navSections.map((section, sectionIndex) => (
              <div key={section.title ?? `section-${sectionIndex}`}>
                {section.title && (
                  <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {section.title}
                  </p>
                )}
                <div className="space-y-1">
                  {section.items.map((item) => {
                    const isActive =
                      pathname === item.href || pathname.startsWith(`${item.href}/`);
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                          isActive
                            ? "bg-accent text-accent-foreground"
                            : "text-muted-foreground hover:bg-accent hover:text-foreground",
                        )}
                        onClick={() => setSheetOpen(false)}
                      >
                        <item.icon className="h-4 w-4" />
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>

          {/* Theme settings */}
          <div className="border-t border-border p-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Appearance
            </p>
            <ThemeSettingsPanel />
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
