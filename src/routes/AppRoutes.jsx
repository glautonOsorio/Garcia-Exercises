import { createBrowserRouter } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";
import { LoginPage } from "../pages/Login.page";

export const AppRouter = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
