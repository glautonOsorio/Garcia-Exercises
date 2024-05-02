import { createBrowserRouter } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";
import { HomePage } from "../pages/Home/Home.page";
import { LoginPage } from "../pages/Login/Login.page";
import { Layout } from "../layout/Layout";
import { LocationsPage } from "../pages/Locations/Locations.page";
import { RegisterLocationPage } from "../pages/RegisterLocation/RegisterLocation.page";
import { ConfigUserPage } from "../pages/ConfigUser/ConfigUser.page";
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
      {
        path: "/location-list",
        element: <LocationsPage />,
      },
      {
        path: "/location-list/:id",
        element: (
          <PrivateRoutes>
            <LocationsPage />
          </PrivateRoutes>
        ),
      },
      {
        path: "/register-locations",
        element: (
          <PrivateRoutes>
            <RegisterLocationPage />
          </PrivateRoutes>
        ),
      },

      {
        path: "/register-locations/:id",
        element: (
          <PrivateRoutes>
            <RegisterLocationPage />
          </PrivateRoutes>
        ),
      },
      {
        path: "/config-user/:id",
        element: (
          <PrivateRoutes>
            <ConfigUserPage />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
