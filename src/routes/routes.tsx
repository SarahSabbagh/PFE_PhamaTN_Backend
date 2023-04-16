import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { SignIn } from "../pages/Login";
import { Register } from "../pages/Register";
import { ErrorPage } from "../pages/Error";
import { Home } from "../pages/Home";
import { PrivateRoute, PrivateRouteNoAuth } from "./gards/gards";
import { Layout } from "../layouts/GlobalLayout";
import { Profile } from "../pages/Profile";
import { Settings } from "../pages/Settings";
import { Dashboard } from "../pages/dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <PrivateRoute component={Home} />,
      },
      {
        path: "login",
        element: <PrivateRouteNoAuth component={SignIn} />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/register",
        element: <PrivateRouteNoAuth component={Register} />,
        errorElement: <ErrorPage />,
      },
      {
        path: "profile",
        element: <PrivateRoute component={Profile} />,
      },
      {
        path: "settings",
        element: <PrivateRoute component={Settings} />,
      },
      {
        path: "dashboard",
        element: <PrivateRoute component={Dashboard} />,
      },
    ],
  },
]);
