import { createBrowserRouter } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";

export const AppRouter = createBrowserRouter([
  {
    path: "/login",
    element: {
      /*login*/
    },
  },
  {
    path: "/register-user",
    element: {
      /*register the user*/
    },
  },

  {
    element: {
      /*Layout*/
    },
    children: [
      {
        path: "/",
        element: {
          /*main*/
        },
      },
      {
        path: "/locations-list",
        element: {
          /*all location*/
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
]);
