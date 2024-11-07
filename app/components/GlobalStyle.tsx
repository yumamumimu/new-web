// components/GlobalStyle.tsx
import { createGlobalStyle } from "styled-components";
import { themes } from "../hooks/theme"; // Impor tema dari hooks/theme.ts

// Global style untuk tema dinamis
const GlobalStyle = createGlobalStyle<{ theme: typeof themes.light }>`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    font-family: Arial, sans-serif;
    padding: 0 20px;
  }

  .fotoku {
    border-radius: 50%;
    width: 200px;
    height: 200px;
    object-fit: cover;
    margin: 15px auto;
    display: block;
    border: solid 5px ${({ theme }) => theme.borderColor};
    box-shadow: 0px 0px 10px ${({ theme }) => theme.boxShadowColor};
    cursor: pointer;
    transition: 0.2s;
  }

  .fotoku:hover {
    border: solid 5px ${({ theme }) => theme.hoverBorderColor};
    box-shadow: 0px 0px 10px ${({ theme }) => theme.hoverBoxShadowColor};
    transform: scale(1.1);
  }

  .container {
    background-color: ${({ theme }) => theme.containerBackground};
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
    margin-bottom: 20px;
  }

  section {
    margin-bottom: 20px;
  }

  section h2 {
    color: ${({ theme }) => theme.sectionHeadingColor};
    margin-bottom: 10px;
    font-size: 1.5rem;
  }
`;

export default GlobalStyle;
