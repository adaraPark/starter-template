import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { Toaster } from "sonner";

import { ThemeProvider, ColorThemeProvider } from "@starter/ui/providers";
import { TRPCProvider } from "~/trpc/TRPCProvider";

import "~/styles/globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Starter Template",
    template: "%s | Starter Template",
  },
  description:
    "A production-ready monorepo with Next.js 15, tRPC, Prisma, and a shared design system.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Starter Template",
    description:
      "A production-ready monorepo with everything you need to ship fast.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${fraunces.variable} antialiased`}>
        <ThemeProvider>
          <ColorThemeProvider>
            <TRPCProvider>
              {children}
              <Toaster richColors position="bottom-right" />
            </TRPCProvider>
          </ColorThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
