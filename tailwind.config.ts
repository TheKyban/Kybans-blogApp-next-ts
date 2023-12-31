import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                Bg: "var(--Bg)",
                text: "var(--text)",
                softBg: "var(--softBg)",
                softTextColor: "var(--softTextColor)",
            },
            fontFamily: {
                "--playpen-sans": "var(--playpen-sans)",
                "--poppins": "var(--poppins)",
                "--inter": "var(--inter)",
            },
            gridTemplateColumns: {
                auto_fit: "repeat(auto-fit, minmax(12rem, 1fr))",
                auto_fit_2: "repeat(auto-fit, minmax(5rem, 60px))",
            },
            dropShadow: {
                personal:"-10px -5px 25px var(--drop-color)"
            },
        },
    },
    plugins: [],
};
export default config;
