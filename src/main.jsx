import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GlobalStyle } from "./Global.style.jsx";
import { ThemeProvider } from "./contexts/Theme.context.jsx";
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./routes/AppRoutes.jsx";
import { AuthContextProvider } from "./contexts/Auth.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <AuthContextProvider>
      <RouterProvider router={AppRouter} />
      <GlobalStyle />
    </AuthContextProvider>
  </ThemeProvider>
);
