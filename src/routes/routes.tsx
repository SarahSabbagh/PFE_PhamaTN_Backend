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
import { SearchPage } from "../pages/SearchPage";

export const routes = createBrowserRouter([
  {
    path: paths.DASHBOARD,
    element: <PrivateRouteAuth component={Layout} />,
    children: [
      {
        id: "DASHBOARD",
        index: true,
        element: (
          <PrivateRouteRole
            component={Dashboard}
            accessibleRoles={[
              rolesValue.ADMINISTRATOR,
              rolesValue.PHARMACY,
              rolesValue.WHOLESALER,
            ]}
          />
        ),
      },
      {
        id: "PROFILES",
        path: paths.PROFILE,
        element: (
          <PrivateRouteRole
            component={Profile}
            accessibleRoles={[
              rolesValue.ADMINISTRATOR,
              rolesValue.PHARMACY,
              rolesValue.WHOLESALER,
            ]}
          />
        ),
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
        element: (
          <PrivateRouteRole
            component={LotsPage}
            accessibleRoles={[
              rolesValue.PHARMACY,
              rolesValue.WHOLESALER,
              rolesValue.ADMINISTRATOR,
            ]}
          />
        ),
      },
      {
        id: "MEDICATION",
        path: paths.MEDICATION,
        element: (
          <PrivateRouteRole
            component={MedicationsPage}
            accessibleRoles={[
              rolesValue.PHARMACY,
              rolesValue.WHOLESALER,
              rolesValue.ADMINISTRATOR,
            ]}
          />
        ),
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
        element: (
          <PrivateRouteRole
            component={Notifications}
            accessibleRoles={[
              rolesValue.PHARMACY,
              rolesValue.WHOLESALER,
              rolesValue.ADMINISTRATOR,
            ]}
          />
        ),
      },
      {
        id: " SEARCH",
        path: paths.SEARCH,
        element: (
          <PrivateRouteRole
            component={SearchPage}
            accessibleRoles={[
              rolesValue.PHARMACY,
              rolesValue.WHOLESALER,
              rolesValue.ADMINISTRATOR,
            ]}
          />
        ),
      },
    ],
  },
  {
    path: paths.LOGIN,
    id: "LOGIN",
    element: (
      <LayoutLogin>
        <PrivateRouteNoAuth component={SignIn} />
      </LayoutLogin>
    ),
  },
  {
    path: paths.REGISTER,
    id: "REGISTER",
    element: (
      <LayoutLogin>
        <PrivateRouteNoAuth component={Register} />
      </LayoutLogin>
    ),
  },
  { path: "*", element: <ErrorPage /> },
  { path: paths.PAGE_NOT_FOUND, element: <ErrorPage /> },
]);
