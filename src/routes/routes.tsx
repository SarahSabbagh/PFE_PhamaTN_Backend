import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { SignIn } from "../pages/Login";
import { Register } from "../pages/Register";
import { ErrorPage } from "../pages/Error";
import { Layout, LayoutLogin } from "../layouts/GlobalLayout";
import { Profile } from "../pages/Profile";
import { Dashboard } from "../pages/dashboard";
import { PrivateRouteNoAuth } from "./privateRoutes/PrivateRouteNoAuth";
import { PrivateRouteAuth } from "./privateRoutes/PrivateRouteAuth";
import { paths } from "../core/constants/path";
import { UsersPage } from "../pages/admin/Users";
import { DcisPage } from "../pages/admin/Dci";
import { MarquesPage } from "../pages/admin/Marque";
import { MedicationsPage } from "../pages/admin/Medications";
import { FormsPage } from "../pages/admin/Form";
import { CategoriesPage } from "../pages/admin/Category";
import { LotsPage } from "../pages/admin/Lots";
import { Notifications } from "../pages/Notifications";
import { rolesValue } from "../core/constants/roles";
import { PrivateRouteRole } from "./privateRoutes/PrivateRouteRole";
import { StockPage } from "../pages/stock";

export const routes = createBrowserRouter([
  {
    path: paths.DASHBOARD,
    element: <PrivateRouteAuth component={Layout} />,
    children: [
      {
        id: "DASHBOARD",
        index: true,
        element: <Dashboard />,
      },
      {
        id: "PROFILES",
        path: paths.PROFILE,
        element: <Profile />,
      },
      {
        id: "USERS",
        path: paths.USERS,
        element: (
          <PrivateRouteRole
            component={UsersPage}
            accessibleRoles={[rolesValue.ADMINISTRATOR]}
          />
        ),
      },
      {
        id: "Stock",
        path: paths.STOCK,
        element: (
          <PrivateRouteRole
            component={StockPage}
            accessibleRoles={[rolesValue.PHARMACY, rolesValue.WHOLESALER]}
          />
        ),
      },
      {
        id: "LOT",
        path: paths.LOT,
        element: <LotsPage />,
      },
      {
        id: "MEDICATION",
        path: paths.MEDICATION,
        element: <MedicationsPage />,
      },
      {
        id: "DCI",
        path: paths.DCI,
        element: (
          <PrivateRouteRole
            component={DcisPage}
            accessibleRoles={[rolesValue.ADMINISTRATOR]}
          />
        ),
      },
      {
        id: "MARQUE",
        path: paths.MARQUE,
        element: (
          <PrivateRouteRole
            component={MarquesPage}
            accessibleRoles={[rolesValue.ADMINISTRATOR]}
          />
        ),
      },
      {
        id: "CATEGORY",
        path: paths.CATEGORY,
        element: (
          <PrivateRouteRole
            component={CategoriesPage}
            accessibleRoles={[rolesValue.ADMINISTRATOR]}
          />
        ),
      },
      {
        id: "FORM",
        path: paths.FORM,
        element: (
          <PrivateRouteRole
            component={FormsPage}
            accessibleRoles={[rolesValue.ADMINISTRATOR]}
          />
        ),
      },
      {
        id: " NOTIFICATION",
        path: paths.NOTIFICATION,
        element: <Notifications />,
      },
    ],
  },
  {
    path: paths.DASHBOARD,
    element: <PrivateRouteNoAuth component={LayoutLogin} />,
    children: [
      {
        id: "LOGIN",
        path: paths.LOGIN,
        element: <SignIn />,
      },
      {
        id: "REGISTER",
        path: paths.REGISTER,
        element: <Register />,
      },
    ],
  },
  { path: "*", element: <ErrorPage /> },
  { path: paths.PAGE_NOT_FOUND, element: <ErrorPage /> },
]);
