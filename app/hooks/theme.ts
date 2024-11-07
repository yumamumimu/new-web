// hooks/theme.ts
export const themes = {
    light: {
      background: "#ffffff",
      color: "#000000",
      borderColor: "#333",
      boxShadowColor: "#000",
      hoverBorderColor: "#BB86FC",
      hoverBoxShadowColor: "#BB86FC",
      containerBackground: "rgba(255, 255, 255, 0.8)",
      sectionHeadingColor: "#6200EE",
    },
    dark: {
      background: "#121212",
      color: "#E0E0E0",
      borderColor: "#333",
      boxShadowColor: "#000",
      hoverBorderColor: "#BB86FC",
      hoverBoxShadowColor: "#BB86FC",
      containerBackground: "rgba(30, 30, 30, 0.8)",
      sectionHeadingColor: "#BB86FC",
    },
    grey: {
      background: "#808080",
      color: "#000000",
      borderColor: "#333",
      boxShadowColor: "#000",
      hoverBorderColor: "#FF9800",
      hoverBoxShadowColor: "#FF9800",
      containerBackground: "rgba(169, 169, 169, 0.8)",
      sectionHeadingColor: "#FF9800",
    },
  };
  
  export type ThemeType = keyof typeof themes;
  