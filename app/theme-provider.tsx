"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type ThemeMode = "light" | "dark";

type ThemeContextValue = {
    theme: ThemeMode;
};

const ThemeContext = createContext<ThemeContextValue>({ theme: "light" });

const applyTheme = (mode: ThemeMode) => {
    const root = document.documentElement;
    root.classList.toggle("dark", mode === "dark");
    root.dataset.theme = mode;
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<ThemeMode>("light");

    useEffect(() => {
        const media = window.matchMedia("(prefers-color-scheme: dark)");
        const initial = media.matches ? "dark" : "light";

        applyTheme(initial);
        setTheme(initial);

        const handler = (event: MediaQueryListEvent) => {
            const next = event.matches ? "dark" : "light";
            applyTheme(next);
            setTheme(next);
        };

        media.addEventListener("change", handler);
        return () => media.removeEventListener("change", handler);
    }, []);

    const value = useMemo(() => ({ theme }), [theme]);

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => useContext(ThemeContext);
