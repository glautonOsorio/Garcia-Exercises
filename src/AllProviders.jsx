import React from "react";
import { ThemeProvider } from "./contexts/Theme.context.jsx";
import { AuthContextProvider } from "./contexts/Auth.context.jsx";
import { LoginContextProvider } from "./contexts/Login.context.jsx";

export const AllProviders = ({ children }) => {
  return (
    <ThemeProvider>
      <AuthContextProvider>
        <LoginContextProvider>{children}</LoginContextProvider>
      </AuthContextProvider>
    </ThemeProvider>
  );
};
