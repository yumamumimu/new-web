// pages/Gallery.tsx
"use client"; 
import "./yuma-style.css";
import Hero from "./components/hero";
import Resume from "./components/Resume";
import Galeri from "./components/Gallery";
import Rating from "./components/ContactForm";
import ToggleTheme from "./components/ToggleTheme"; // Import komponen ToggleTheme
import { useTheme } from "./hooks/useTheme"; // Menggunakan hook useTheme untuk menangani tema
import { ThemeProvider } from "styled-components"; // Menggunakan ThemeProvider untuk styling tema
import GlobalStyle from "./components/GlobalStyle"; // Mengimpor GlobalStyle

// Import objek themes dari file theme.ts yang ada di folder hooks
import { themes } from "./hooks/theme"; // Pastikan jalur importnya benar


export default function Gallery() {
  const { theme, toggleTheme } = useTheme(); // Mengambil tema dan fungsi toggle dari useTheme

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <section>
        <div style={{ marginBottom: '20px' }}>
          {/* Menambahkan ToggleTheme untuk mengubah tema */}
          <ToggleTheme onThemeChange={toggleTheme} />
        </div>
        <div style={{ marginBottom: '40px' }}>
          <Hero />
        </div>
        <div style={{ marginBottom: '40px' }}>
          <Resume />
        </div>
        <div style={{ marginBottom: '40px' }}>
          <Galeri />
        </div>
        <div style={{ marginTop: '40px' }}>
          <Rating />
        </div>
      </section>
    </ThemeProvider>
  );
}
