"use client";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeButton() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    // Optionally, store preference:
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      setIsDark(true);
    }
  }, []);

  return (
    // <button
    //   onClick={() => setIsDark(!isDark)}
    //   className="fixed top-6 right-6 z-40 px-3 py-1 w-12 h-12"
    // >
    <button
      onClick={() => setIsDark(!isDark)}
      className={`fixed top-2.5 right-16 z-100 lg:top-6 lg:right-6 w-12 h-12 action-bg text-white rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center hover:scale-110 hover:shadow-purple-500/25`}
      title="Back to top"
    >
      {isDark ? <Sun /> : <Moon />}
    </button>
  );
}
