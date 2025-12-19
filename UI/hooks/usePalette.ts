"use client";

import { useMemo } from "react";
import { useTheme } from "../../app/theme-provider";
import { darkThemeColors, themeColors, type ThemeColors } from "../Colors/Colors";

type ThemeMode = "light" | "dark";

type UsePaletteReturn = {
    palette: ThemeColors;
    mode: ThemeMode;
};

export function usePalette(overrideMode?: ThemeMode): UsePaletteReturn {
    const { theme } = useTheme();
    const mode = overrideMode ?? theme;

    const palette = useMemo(() => (mode === "dark" ? darkThemeColors : themeColors), [mode]);

    return { palette, mode };
}
