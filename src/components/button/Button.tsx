"use client";
import { useThemeContext } from "@/Providers/ThemeProvider";
import React from "react";

const Button = () => {
    const { theme, toggleTheme } = useThemeContext();
    return (
        <button
            className="bg-slate-600 rounded-md px-2 py-1"
            onClick={toggleTheme}
        >
            Theme toggle
        </button>
    );
};

export default Button;
