// hooks/useTheme.ts
import { useState, useEffect } from "react";
import { themes, ThemeType } from "./theme"; // Pastikan jalur ini benar

export const useTheme = () => {
  const [theme, setTheme] = useState<typeof themes.light>(themes.light); // Default theme

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as ThemeType;
    if (savedTheme && themes[savedTheme]) {
      setTheme(themes[savedTheme]);
    }
  }, []);

  const toggleTheme = (newTheme: ThemeType) => {
    setTheme(themes[newTheme]);
    localStorage.setItem("theme", newTheme); // Menyimpan tema ke localStorage
  };

  return { theme, toggleTheme };
};
