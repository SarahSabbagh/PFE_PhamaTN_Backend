import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { SignIn } from "../pages/Login";
import { Register } from "../pages/Register";
import { ErrorPage } from "../pages/Error";
import { Home } from "../pages/Home";
import { Layout, LayoutLogin } from "../layouts/GlobalLayout";
import { Profile } from "../pages/Profile";
import { Settings } from "../pages/Settings";
import { Dashboard } from "../pages/dashboard";
import { PrivateRouteNoAuth } from "./privateRoutes/PrivateRouteNoAuth";
import { PrivateRouteAuth } from "./privateRoutes/PrivateRouteAuth";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRouteAuth component={Layout} />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/",
    element: <PrivateRouteNoAuth component={LayoutLogin} />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "login",
        element: <SignIn />,
        errorElement: <ErrorPage />,
      },
      {
        path: "register",
        element: <Register />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
