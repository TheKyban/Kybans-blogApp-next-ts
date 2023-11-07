"use client";

import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useLayoutEffect,
    useState,
} from "react";

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
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const [theme, setTheme] = useState<theme>("dark");

    //Toggle theme function
    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
        localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
    };

    useLayoutEffect(() => {
        setIsMounted(true);
        // @ts-ignore
        setTheme(localStorage.getItem("theme") || "dark");
    }, []);

    if (!isMounted) {
        return null;
    }

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
