import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Public paths that don't require authentication
// When you add auth, paths NOT in this list will require login
const PUBLIC_PREFIXES = new Set([
  "about",
  "learn",
  "api",
  // [ADD_PUBLIC_PATH] -- Add new public paths above this line
]);

export function isPublicPath(pathname: string): boolean {
  if (pathname === "/") return true;
  const firstSegment = pathname.split("/")[1] ?? "";
  return PUBLIC_PREFIXES.has(firstSegment);
}

export function middleware(request: NextRequest) {
  // When auth is added, check isPublicPath() and redirect unauthenticated users

  const response = NextResponse.next();
  let needsResponse = false;

  // Set persistent visitor_id cookie for analytics (2-year expiry)
  if (!request.cookies.has("visitor_id")) {
    response.cookies.set("visitor_id", crypto.randomUUID(), {
      maxAge: 2 * 365 * 86400,
      path: "/",
      httpOnly: true,
      sameSite: "lax",
      secure: request.nextUrl.protocol === "https:",
    });
    needsResponse = true;
  }

  // Capture referral source from ?ref= param
  const ref = request.nextUrl.searchParams.get("ref");
  if (ref && !request.cookies.has("ref")) {
    response.cookies.set("ref", ref.slice(0, 100), {
      maxAge: 30 * 86400,
      path: "/",
      sameSite: "lax",
      secure: request.nextUrl.protocol === "https:",
    });
    needsResponse = true;
  }

  if (needsResponse) return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
