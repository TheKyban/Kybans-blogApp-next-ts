"use client";
import { useThemeContext } from "@/Providers/ThemeProvider";
import Image from "next/image";
import React from "react";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useThemeContext();
    return (
        <div
            onClick={toggleTheme}
            className={`flex items-center gap-2 px-1 py-1 rounded-xl cursor-pointer relative ${
                theme === "dark" ? "bg-text" : "bg-text"
            } min-w-[46px] select-none`}
        >
            <Image
                src={"/sun.png"}
                width={15}
                height={15}
                alt="light"
                className="relative z-10"
            />
            <Image
                src={"/moon.png"}
                width={15}
                height={15}
                alt="dark"
                className="relative z-10"
            />

            {/* BALL */}

            <div
                className={` w-[18px] h-[18px] rounded-full absolute top-2/4 -translate-y-1/2 ${
                    theme === "dark"
                        ? "left-[calc(46px-18px-3px)] bg-Bg"
                        : "left-[3px] bg-softTextColor"
                } transition-all`}
            ></div>
        </div>
    );
};

export default ThemeToggle;
