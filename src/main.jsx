import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GlobalStyle } from "./Global.style.jsx";
import { ThemeProvider } from "./contexts/Theme.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <App />
    <GlobalStyle />
  </ThemeProvider>
);
