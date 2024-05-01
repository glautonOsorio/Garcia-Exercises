import { createBrowserRouter } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";
import { HomePage } from "../pages/Home/Home.page";
import { LoginPage } from "../pages/Login/Login.page";
import { Layout } from "../layout/Layout";

export const AppRouter = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },

  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

/*
      },
      {
        path: "/location-list/:id",
        element: <PrivateRoutes></PrivateRoutes>,
      },
      {
        path: "/register-locations/:id",
        element: <PrivateRoutes></PrivateRoutes>,
      },
      {
        path: "/config-user/:id",
        element: <PrivateRoutes></PrivateRoutes>,
      },
    ],*/
