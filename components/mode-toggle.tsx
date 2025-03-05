"use client";

import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";
import { useEffect, useState } from "react";

interface ModeToggleProps {
    asDropdownItem?: boolean;
}

export function ModeToggle({ asDropdownItem = false }: ModeToggleProps) {
    const { theme, setTheme } = useTheme();

    // This prevents hydration mismatch by only rendering after mount
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    // If used inside a dropdown, render a simpler version
    if (asDropdownItem) {
        return (
            <div className="flex items-center gap-2">
                <button
                    onClick={(e) => {
                        e.stopPropagation(); // Prevent parent dropdown from closing
                        setTheme("light");
                    }}
                    className={`p-1 rounded-md ${theme === 'light' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                >
                    <Sun className="h-4 w-4" />
                </button>
                <button
                    onClick={(e) => {
                        e.stopPropagation(); // Prevent parent dropdown from closing
                        setTheme("dark");
                    }}
                    className={`p-1 rounded-md ${theme === 'dark' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                >
                    <Moon className="h-4 w-4" />
                </button>
                <button
                    onClick={(e) => {
                        e.stopPropagation(); // Prevent parent dropdown from closing
                        setTheme("system");
                    }}
                    className={`p-1 rounded-md ${theme === 'system' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                >
                    <Monitor className="h-4 w-4" />
                </button>
            </div>
        );
    }

    // Regular toggle for standard use
    return (
        <div className="flex items-center rounded-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-1 shadow-sm">
            <button
                onClick={() => setTheme("light")}
                className={`p-1.5 rounded-sm ${theme === 'light' ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
                aria-label="Light mode"
            >
                <Sun className="h-4 w-4" />
            </button>
            <button
                onClick={() => setTheme("dark")}
                className={`p-1.5 rounded-sm ${theme === 'dark' ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
                aria-label="Dark mode"
            >
                <Moon className="h-4 w-4" />
            </button>
            <button
                onClick={() => setTheme("system")}
                className={`p-1.5 rounded-sm ${theme === 'system' ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
                aria-label="System mode"
            >
                <Monitor className="h-4 w-4" />
            </button>
        </div>
    );
}