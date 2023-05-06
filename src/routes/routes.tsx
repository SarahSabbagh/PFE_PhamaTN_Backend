import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { SignIn } from "../pages/Login";
import { Register } from "../pages/Register";
import { ErrorPage } from "../pages/Error";
import { Layout, LayoutLogin } from "../layouts/GlobalLayout";
import { Profile } from "../pages/Profile";
import { Settings } from "../pages/Settings";
import { Dashboard } from "../pages/dashboard";
import { PrivateRouteNoAuth } from "./privateRoutes/PrivateRouteNoAuth";
import { PrivateRouteAuth } from "./privateRoutes/PrivateRouteAuth";
import { paths } from "../core/constants/path";
import { UsersPage } from "../pages/admin/Users";
import { DcisPage } from "../pages/admin/Dci";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <PrivateRouteAuth component={Dashboard} />
      </Layout>
    ),
  },
  {
    id: "PROFILES",
    path: paths.PROFILE,
    element: (
      <Layout>
        <PrivateRouteAuth component={Profile} />
      </Layout>
    ),
  },
  {
    id: "SETTINGS",
    path: paths.SETTINGS,
    element: (
      <Layout>
        <PrivateRouteAuth component={Settings} />
      </Layout>
    ),
  },
  {
    id: "DASHBOARD",
    path: paths.DASHBOARD,
    element: (
      <Layout>
        <PrivateRouteAuth component={Dashboard} />
      </Layout>
    ),
  },
  {
    id: "USERS",
    path: paths.USERS,
    element: (
      <Layout>
        <PrivateRouteAuth component={UsersPage} />
      </Layout>
    ),
  },
  {
    id: "DCI",
    path: paths.DCI,
    element: (
      <Layout>
        <PrivateRouteAuth component={DcisPage} />
      </Layout>
    ),
  },
  {
    id: "LOGIN",
    path: paths.LOGIN,
    element: (
      <LayoutLogin>
        <PrivateRouteNoAuth component={SignIn} />
      </LayoutLogin>
    ),
  },
  {
    id: "REGISTER",
    path: paths.REGISTER,
    element: (
      <LayoutLogin>
        <PrivateRouteNoAuth component={Register} />
      </LayoutLogin>
    ),
  },
  { path: "*", element: <ErrorPage /> },
]);
