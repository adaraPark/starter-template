"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";
import { ThemeSettingsPanel } from "@starter/ui/composed";
import { navSections } from "~/app/_components/layout/navItems";

interface AppSidebarProps {
  className?: string;
}

export function AppSidebar({ className }: AppSidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "flex w-64 shrink-0 flex-col border-r border-sidebar-border bg-sidebar",
        className,
      )}
    >
      {/* Logo */}
      <div className="flex h-14 items-center border-b border-sidebar-border px-4">
        <Link href="/" className="font-display text-lg font-bold text-sidebar-foreground">
          Starter Template
        </Link>
      </div>

      {/* Navigation sections */}
      <nav className="flex-1 space-y-4 overflow-y-auto p-4">
        {navSections.map((section, sectionIndex) => (
          <div key={section.title ?? `section-${sectionIndex}`}>
            {section.title && (
              <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wide text-sidebar-foreground/50">
                {section.title}
              </p>
            )}
            <div className="space-y-1">
              {section.items.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                      isActive
                        ? "bg-sidebar-accent text-sidebar-accent-foreground"
                        : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                    )}
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

      {/* Theme settings at bottom */}
      <div className="border-t border-sidebar-border p-4">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-sidebar-foreground/50">
          Appearance
        </p>
        <ThemeSettingsPanel />
      </div>
    </aside>
  );
}
