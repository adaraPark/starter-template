import { describe, it, expect } from "vitest";
import { cn, formatCurrency, formatPercent, sanitizeInput } from "./utils";

describe("cn", () => {
  it("merges class names", () => {
    expect(cn("foo", "bar")).toBe("foo bar");
  });

  it("handles conditional classes", () => {
    expect(cn("base", false && "hidden", "visible")).toBe("base visible");
  });

  it("resolves Tailwind conflicts", () => {
    expect(cn("p-4", "p-2")).toBe("p-2");
  });
});

describe("formatCurrency", () => {
  it("formats whole numbers", () => {
    expect(formatCurrency(1234567)).toBe("$1,234,567");
  });

  it("formats zero", () => {
    expect(formatCurrency(0)).toBe("$0");
  });

  it("formats negative numbers", () => {
    expect(formatCurrency(-500)).toBe("-$500");
  });
});

describe("formatPercent", () => {
  it("formats decimal as percentage", () => {
    expect(formatPercent(0.5)).toBe("50%");
  });

  it("supports decimal places", () => {
    expect(formatPercent(0.3333, 1)).toBe("33.3%");
  });
});

describe("sanitizeInput", () => {
  it("removes HTML tags", () => {
    expect(sanitizeInput("<script>alert('xss')</script>")).toBe("alert('xss')");
  });

  it("removes javascript: protocol", () => {
    expect(sanitizeInput("javascript:alert(1)")).toBe("alert(1)");
  });

  it("returns empty string as-is", () => {
    expect(sanitizeInput("")).toBe("");
  });

  it("preserves normal text", () => {
    expect(sanitizeInput("Hello world")).toBe("Hello world");
  });
});
