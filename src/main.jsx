import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { GlobalStyle } from "./Global.style.jsx";
import { AllProviders } from "./AllProviders.jsx";
import { AppRouter } from "./routes/AppRoutes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AllProviders>
    <RouterProvider router={AppRouter} />
    <GlobalStyle />
  </AllProviders>
);
