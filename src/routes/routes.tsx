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
    element: (
      <Layout>
        <PrivateRouteAuth component={Home} />
      </Layout>
    ),
  },
  {
    id: "PROFILES",
    path: "profile",
    element: (
      <Layout>
        <PrivateRouteAuth component={Profile} />
      </Layout>
    ),
  },
  {
    id: "SETTINGS",
    path: "settings",
    element: (
      <Layout>
        <PrivateRouteAuth component={Settings} />
      </Layout>
    ),
  },
  {
    id: "DASHBOARD",
    path: "dashboard",
    element: (
      <Layout>
        <PrivateRouteAuth component={Dashboard} />
      </Layout>
    ),
  },
  {
    id: "USERS",
    path: "/",
    element: (
      <Layout>
        <PrivateRouteAuth component={Dashboard} />
      </Layout>
    ),
  },
  {
    id: "LOGIN",
    path: "login",
    element: (
      <LayoutLogin>
        <PrivateRouteNoAuth component={SignIn} />
      </LayoutLogin>
    ),
  },
  {
    id: "REGISTER",
    path: "register",
    element: (
      <LayoutLogin>
        <PrivateRouteNoAuth component={Register} />
      </LayoutLogin>
    ),
  },
  { path: "*", element: <ErrorPage /> },
]);
