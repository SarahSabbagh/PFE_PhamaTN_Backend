import * as React from "react";
import MedicationOutlinedIcon from "@mui/icons-material/MedicationOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import { paths } from "../../path";

export interface ISideBarMenuList {
  id: string;
  title: string;
  url: string;
  icon: JSX.Element;
  subMenu?: ISubMenu[];
}
export interface ISubMenu {
  id: string;
  title: string;
  url: string;
  icon?: JSX.Element;
}

export const SideBarMenuList: ISideBarMenuList[] = [
  {
    id: "DASHBOARD",
    title: "Dashboard",
    url: paths.DASHBOARD,
    icon: <DashboardOutlinedIcon />,
  },
  {
    id: "USERS",
    title: "Users",
    url: paths.USERS,
    icon: <PeopleAltOutlinedIcon />,
  },
  {
    id: "MEDICATION_Information",
    title: "Drugs Info",
    url: paths.MEDICATION,
    icon: <MedicationOutlinedIcon />,
    subMenu: [
      {
        id: "MEDICATION",
        title: "Medications",
        url: paths.MEDICATION,
        icon: <FeedOutlinedIcon />,
      },
      { id: "DCI", title: "DCI", url: paths.DCI, icon: <FeedOutlinedIcon /> },
    ],
  },
  {
    id: "STATISTIQUE",
    title: "Statistique",
    url: paths.STATISTIQUE,

    icon: <AutoGraphOutlinedIcon />,
  },
];
