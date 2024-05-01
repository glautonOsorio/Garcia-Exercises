import { createBrowserRouter } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";
import { HomePage } from "../pages/Home/Home.page";
import { LoginPage } from "../pages/Login/Login.page";

export const AppRouter = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    /*
 {
   element: {
     Layout
    },
    children: [
      {
        path: "/locations-list",
        element: {
          all location
        },
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
    ],
  },
*/
  },
]);
