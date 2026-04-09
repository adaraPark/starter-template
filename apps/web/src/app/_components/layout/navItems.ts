import type { LucideIcon } from "lucide-react";
import { LayoutDashboard } from "lucide-react";

export interface NavItem {
  name: string;
  href: string;
  icon: LucideIcon;
}

export interface NavSection {
  title: string | null; // null = no section header
  items: NavItem[];
}

export const navSections: NavSection[] = [
  {
    title: null,
    items: [
      { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    ],
  },
  // [ADD_NAV_SECTION] -- Add new navigation sections above this line
];

export const marketingNavLinks = [
  { name: "Learn", href: "/learn" },
  { name: "About", href: "/about" },
];
