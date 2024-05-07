import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
  html, body, #root {
    width: 100%;
    height: 100%;
  }
`;
