import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format number as currency (full precision with commas)
 * 1234567 -> "$1,234,567"
 */
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

/**
 * Format decimal as percentage
 * 0.5 -> "50%"
 */
export function formatPercent(value: number, decimals = 0): string {
  return `${(value * 100).toFixed(decimals)}%`;
}

/**
 * Sanitize user input to prevent XSS attacks
 * Removes potentially dangerous HTML/script tags and characters
 */
export function sanitizeInput(input: string): string {
  if (!input) return input;

  // Remove HTML tags
  let sanitized = input.replace(/<[^>]*>/g, "");

  // Remove script-related content
  sanitized = sanitized.replace(/javascript:/gi, "");
  sanitized = sanitized.replace(/on\w+\s*=/gi, "");

  // Remove potentially dangerous characters while preserving normal punctuation
  sanitized = sanitized.replace(/[<>]/g, "");

  // Trim and normalize whitespace
  sanitized = sanitized.trim().replace(/\s+/g, " ");

  return sanitized;
}
