import React from "react";
import { ThemeProvider } from "./contexts/Theme.context.jsx";
import { AuthContextProvider } from "./contexts/Auth.context.jsx";
import { LoginContextProvider } from "./contexts/Login.context.jsx";
import { LocationContextProvider } from "./contexts/Locations.context.jsx";

export const AllProviders = ({ children }) => {
  return (
    <ThemeProvider>
      <AuthContextProvider>
        <LocationContextProvider>
          <LoginContextProvider>{children}</LoginContextProvider>
        </LocationContextProvider>
      </AuthContextProvider>
    </ThemeProvider>
  );
};
