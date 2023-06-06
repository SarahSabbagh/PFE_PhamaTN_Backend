import * as React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { paths } from "../path";
import { colors } from "../colors";
import i18next from "i18next";

const translate = (key: string): string => i18next.t(key) || "";

export interface ISideBarMenuList {
  id: string;
  title: string;
  url: string;
  icon: JSX.Element;
}

export const userMenu: ISideBarMenuList[] = [
  {
    id: "PROFILE",
    title: translate("userMenu.PROFILE"),
    url: paths.PROFILE,
    icon: <PersonIcon fontSize="small" />,
  },
  {
    id: "NOTIFICATION",
    title: translate("userMenu.NOTIFICATION"),
    url: paths.NOTIFICATION,
    icon: <NotificationsIcon fontSize="small" />,
  },
  {
    id: "SETTINGS",
    title: translate("userMenu.SETTINGS"),
    url: paths.SETTINGS,
    icon: <Settings fontSize="small" />,
  },
  {
    id: "LOGOUT",
    title: translate("userMenu.LOGOUT"),
    url: paths.LOGIN,
    icon: <Logout fontSize="small" />,
  },
];
