"use client";

import { createContext, useContext, useEffect, useCallback, useState } from "react";

// -- Theme types and data --

export type ColorThemeId = "ember" | "barbie" | "forest" | "ocean" | "gold" | "purple";

export interface ColorThemeConfig {
  id: ColorThemeId;
  name: string;
  description: string;
  emoji: string;
  previewColors: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

export const COLOR_THEMES: ColorThemeConfig[] = [
  {
    id: "ember",
    name: "Ember",
    description: "Warm orange & gold",
    emoji: "\u{1F525}",
    previewColors: {
      primary: "#c45a2c",
      secondary: "#d4a76a",
      accent: "#e8c9a4",
    },
  },
  {
    id: "barbie",
    name: "Barbie",
    description: "Pink & purple",
    emoji: "\u{1F496}",
    previewColors: {
      primary: "#e84a8a",
      secondary: "#a855f7",
      accent: "#f0abfc",
    },
  },
  {
    id: "forest",
    name: "Forest",
    description: "Green & nature",
    emoji: "\u{1F332}",
    previewColors: {
      primary: "#22825d",
      secondary: "#6ba583",
      accent: "#a7d8c0",
    },
  },
  {
    id: "ocean",
    name: "Ocean",
    description: "Blue & waves",
    emoji: "\u{1F30A}",
    previewColors: {
      primary: "#0066cc",
      secondary: "#4da6ff",
      accent: "#7fdbff",
    },
  },
  {
    id: "gold",
    name: "Gold",
    description: "Golden & luxe",
    emoji: "\u2728",
    previewColors: {
      primary: "#d4a418",
      secondary: "#eab308",
      accent: "#fde047",
    },
  },
  {
    id: "purple",
    name: "Royalty",
    description: "Vibrant violet vibes",
    emoji: "\u{1F451}",
    previewColors: {
      primary: "#8b5cf6",
      secondary: "#a78bfa",
      accent: "#c4b5fd",
    },
  },
];

export function getThemeConfig(id: ColorThemeId): ColorThemeConfig | undefined {
  return COLOR_THEMES.find((t) => t.id === id);
}

// -- Context and Provider --

interface ColorThemeContextType {
  colorTheme: ColorThemeId;
  setColorTheme: (theme: ColorThemeId) => void;
}

const ColorThemeContext = createContext<ColorThemeContextType | undefined>(undefined);

const STORAGE_KEY = "starter-color-theme";

function isValidTheme(theme: string): theme is ColorThemeId {
  return COLOR_THEMES.some((t) => t.id === theme);
}

function applyColorTheme(theme: ColorThemeId) {
  if (typeof document === "undefined") return;

  // ember is the default theme defined in :root, so remove the attribute
  if (theme === "ember") {
    document.documentElement.removeAttribute("data-color-theme");
  } else {
    document.documentElement.setAttribute("data-color-theme", theme);
  }
}

export function ColorThemeProvider({ children }: { children: React.ReactNode }) {
  const [colorTheme, setColorThemeState] = useState<ColorThemeId>("ember");

  // Hydrate from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && isValidTheme(saved)) {
        setColorThemeState(saved);
        applyColorTheme(saved);
      }
    } catch (e) {
      console.warn("Failed to read color theme from localStorage:", e);
    }
  }, []);

  const setColorTheme = useCallback((theme: ColorThemeId) => {
    setColorThemeState(theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      console.warn("Failed to save color theme to localStorage:", e);
    }
    applyColorTheme(theme);
  }, []);

  return (
    <ColorThemeContext.Provider value={{ colorTheme, setColorTheme }}>
      {children}
    </ColorThemeContext.Provider>
  );
}

export function useColorTheme() {
  const context = useContext(ColorThemeContext);
  if (context === undefined) {
    throw new Error("useColorTheme must be used within a ColorThemeProvider");
  }
  return context;
}
