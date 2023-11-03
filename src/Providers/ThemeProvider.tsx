"use client";

import { ReactNode, createContext, useContext, useState } from "react";

/*
 * TYPES
 **/

type theme = "dark" | "light";
interface contextOptions {
    theme: theme;
    toggleTheme: () => void;
}

/**
 * CONTEXT
 */

const ThemeContext = createContext<contextOptions>({
    theme: "dark",
    toggleTheme() {},
});

/**
 * THEME PROVIDER
 */

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<theme>("dark");
    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={theme} style={{ width: "100%", height: "100%" }}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};

/**
 * A CUSTOM HOOK TO USE THEME CONTEXT
 */

export const useThemeContext = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return { theme, toggleTheme };
};
