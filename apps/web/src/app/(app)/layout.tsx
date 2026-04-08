import Link from "next/link";

// Add auth check here when NextAuth is configured
// import { auth } from "~/server/auth";
// import { redirect } from "next/navigation";

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  // Uncomment when auth is configured:
  // const session = await auth();
  // if (!session?.user) redirect("/login");

  return (
    <div className="flex min-h-screen">
      {/* Sidebar navigation placeholder */}
      <aside className="hidden w-64 shrink-0 border-r border-sidebar-border bg-sidebar lg:block">
        <div className="flex h-14 items-center border-b border-sidebar-border px-4">
          <Link href="/" className="font-display text-lg font-bold text-sidebar-foreground">
            Starter Template
          </Link>
        </div>
        <nav className="space-y-1 p-4">
          <SidebarLink href="/dashboard">Dashboard</SidebarLink>
          {/* [ADD_NAV_ITEM] -- Add new sidebar links above this line */}
        </nav>
      </aside>

      {/* Main content area */}
      <div className="flex flex-1 flex-col">
        {/* Top bar for mobile */}
        <header className="flex h-14 items-center border-b border-border bg-background px-4 lg:hidden">
          <Link href="/" className="font-display text-lg font-bold text-foreground">
            Starter Template
          </Link>
        </header>

        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}

function SidebarLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="block rounded-lg px-3 py-2 text-sm text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
    >
      {children}
    </Link>
  );
}
