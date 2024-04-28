import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./Global.style.jsx";
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./routes/AppRoutes.jsx";
import { AllProviders } from "./AllProviders.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AllProviders>
    <RouterProvider router={AppRouter} />
    <GlobalStyle />
  </AllProviders>
);
