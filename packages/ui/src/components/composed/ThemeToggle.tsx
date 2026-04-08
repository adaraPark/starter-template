"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { Button } from "../primitives/button";
import {
  useColorTheme,
  COLOR_THEMES,
  type ColorThemeId,
} from "../../providers/colorThemeProvider";
import { cn } from "../../lib/utils";

// -- Simple light/dark toggle button --

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className={className} disabled>
        <Sun className="h-4 w-4" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={cn("relative", className)}
      aria-label={`Current theme: ${theme}`}
    >
      {theme === "dark" ? (
        <Moon className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}
    </Button>
  );
}

// -- Full settings panel with mode toggle + color themes --

export function ThemeSettingsPanel({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const { colorTheme, setColorTheme } = useColorTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const modes = [
    { value: "light", label: "Light", icon: Sun },
    { value: "dark", label: "Dark", icon: Moon },
    { value: "system", label: "System", icon: Monitor },
  ] as const;

  return (
    <div className={cn("space-y-6", className)}>
      {/* Dark / Light / System mode */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-muted-foreground">Mode</p>
        <div className="flex gap-2">
          {modes.map(({ value, label, icon: Icon }) => (
            <Button
              key={value}
              variant={theme === value ? "default" : "outline"}
              size="sm"
              onClick={() => setTheme(value)}
              className="flex-1 gap-1.5"
            >
              <Icon className="h-3.5 w-3.5" />
              {label}
            </Button>
          ))}
        </div>
      </div>

      {/* Color theme swatches */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-muted-foreground">
          Color Theme
        </p>
        <div className="grid grid-cols-3 gap-2">
          {COLOR_THEMES.map((t) => (
            <button
              key={t.id}
              onClick={() => setColorTheme(t.id as ColorThemeId)}
              className={cn(
                "group relative flex flex-col items-center gap-1.5 rounded-lg border p-3 transition-colors hover:bg-accent/50",
                colorTheme === t.id
                  ? "border-primary ring-2 ring-primary/20"
                  : "border-border"
              )}
              aria-label={`${t.name} color theme`}
              aria-pressed={colorTheme === t.id}
            >
              {/* Preview swatch with 3 colors */}
              <div className="flex gap-1">
                <div
                  className="h-5 w-5 rounded-full"
                  style={{ backgroundColor: t.previewColors.primary }}
                />
                <div
                  className="h-5 w-5 rounded-full"
                  style={{ backgroundColor: t.previewColors.secondary }}
                />
                <div
                  className="h-5 w-5 rounded-full"
                  style={{ backgroundColor: t.previewColors.accent }}
                />
              </div>
              <span className="text-xs font-medium">{t.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
