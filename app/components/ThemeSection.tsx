// components/ThemeSection.tsx
import React from "react";
import { ThemeType } from "../hooks/theme";  // pastikan jalur import sesuai

interface ThemeSectionProps {
  onThemeChange: (theme: ThemeType) => void;
}

const ThemeSection: React.FC<ThemeSectionProps> = ({ onThemeChange }) => {
  return (
    <section style={{ padding: "20px" }}>
      <h2>Select a Theme</h2>
      <div>
        <button onClick={() => onThemeChange("light")} style={{ margin: "5px", padding: "10px" }}>
          Light Theme
        </button>
        <button onClick={() => onThemeChange("dark")} style={{ margin: "5px", padding: "10px" }}>
          Dark Theme
        </button>
        <button onClick={() => onThemeChange("grey")} style={{ margin: "5px", padding: "10px" }}>
          Grey Theme
        </button>
      </div>
    </section>
  );
};

export default ThemeSection;
