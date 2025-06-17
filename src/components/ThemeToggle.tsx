"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [theme, setTheme] = useState<"light" | "dark" | null>(null);

    useEffect(() => {
        // Hent fra localStorage eller systemvalg
        const stored = localStorage.getItem("theme");
        const prefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;

        if (stored === "dark" || (!stored && prefersDark)) {
            document.documentElement.classList.add("dark");
            setTheme("dark");
        } else {
            document.documentElement.classList.remove("dark");
            setTheme("light");
        }
    }, []);

    const toggleTheme = () => {
        if (theme === "dark") {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setTheme("light");
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setTheme("dark");
        }
    };

    if (!theme) return null;

    return (
        <button
            onClick={toggleTheme}
            className='fixed top-4 right-4 bg-gray-500 text-black dark:text-white rounded-full px-3 py-2 shadow-md z-50'
            aria-label='Toggle dark mode'
        >
            {theme === "dark" ? "☀️" : "🌙"}
        </button>
    );
}
