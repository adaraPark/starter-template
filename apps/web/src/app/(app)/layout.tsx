import { AppSidebar } from "~/app/_components/layout/AppSidebar";
import { AppHeader } from "~/app/_components/layout/AppHeader";

// Add auth check here when NextAuth is configured
// import { auth } from "~/server/auth";
// import { redirect } from "next/navigation";

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  // Uncomment when auth is configured:
  // const session = await auth();
  // if (!session?.user) redirect("/login");

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Desktop sidebar */}
      <AppSidebar className="hidden lg:flex" />

      {/* Main content area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <AppHeader />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
