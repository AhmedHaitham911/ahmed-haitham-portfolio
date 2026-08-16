import { useEffect, useMemo, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import type { Theme } from "../context/ThemeContext";
type ThemeProviderProps = {
  children: React.ReactNode;
};

const STORAGE_KEY = "portfolio-theme";

const getInitialTheme = (): Theme => {
  const savedTheme = localStorage.getItem(STORAGE_KEY) as Theme | null;

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export default function ThemeProvider({
  children,
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);

    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}