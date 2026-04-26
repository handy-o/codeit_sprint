"use client";

import { useTheme } from "next-themes";

export default function ThemeToggle() {
    // const { theme, setTheme } = useTheme();
    const { setTheme } = useTheme();

    return (
        <div className="flex justify-end gap-2 items-center">
            <button className="cursor-pointer border-gray-400 rounded-md px-2 py-1 text-sm bg-gray-200 dark:bg-gray-500" onClick={() => setTheme("system")}>시스템</button>
            <button className="cursor-pointer border border-gray-400 rounded-md px-2 py-1 text-sm dark:bg-gray-200" onClick={() => setTheme("light")}>라이트</button>
            <button className="cursor-pointer border-gray-400 rounded-md px-2 py-1 text-sm text-gray-200 bg-gray-800" onClick={() => setTheme("dark")}>다크</button>
            {/* <p>현재 테마: {theme}</p> */}
        </div>
    );
}