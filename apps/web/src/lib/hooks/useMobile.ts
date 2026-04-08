"use client";
import { useSyncExternalStore } from "react";

function subscribeToResize(callback: () => void) {
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
}

export function useIsMobile(breakpoint = 768): boolean {
  const isMobile = useSyncExternalStore(
    subscribeToResize,
    () => window.innerWidth < breakpoint,
    () => false
  );
  return isMobile;
}
