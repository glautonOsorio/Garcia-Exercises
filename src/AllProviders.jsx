import React from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ThemeProvider } from "./contexts/Theme.context.jsx";
import { AuthContextProvider } from "./contexts/Auth.context.jsx";
import { LoginContextProvider } from "./contexts/Login.context.jsx";
import { LocationContextProvider } from "./contexts/Locations.context.jsx";

export const AllProviders = ({ children }) => {
  return (
    <ThemeProvider>
      <AuthContextProvider>
        <LocationContextProvider>
          <LoginContextProvider>
            <ToastContainer />
            {children}
          </LoginContextProvider>
        </LocationContextProvider>
      </AuthContextProvider>
    </ThemeProvider>
  );
};
