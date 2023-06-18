import * as React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import Logout from "@mui/icons-material/Logout";
import { paths } from "../path";
import { ISideBarMenuList } from "./sideBarMenuList";

export const userMenu: ISideBarMenuList[] = [
  {
    id: "PROFILE",
    title: "userMenu.PROFILE",
    url: paths.PROFILE,
    icon: <PersonIcon fontSize="small" />,
  },
  {
    id: "NOTIFICATION",
    title: "userMenu.NOTIFICATION",
    url: paths.NOTIFICATION,
    icon: <NotificationsIcon fontSize="small" />,
  },
  {
    id: "LOGOUT",
    title: "userMenu.LOGOUT",
    url: paths.LOGIN,
    icon: <Logout fontSize="small" />,
  },
];
