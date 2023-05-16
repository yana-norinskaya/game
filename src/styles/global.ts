import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle(
  () => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Barlow Semi Condensed", sans-serif;
    }
    body {
      height: 100vh;
      background: rgba(42, 62, 132, 1);
      position: relative;
    }
  `
);
export default GlobalStyle;
