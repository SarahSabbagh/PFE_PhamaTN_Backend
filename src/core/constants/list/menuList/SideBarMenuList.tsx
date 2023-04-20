import * as React from "react";
import MedicationOutlinedIcon from "@mui/icons-material/MedicationOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";

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
    url: "Dashboard",
    icon: (
      <DashboardOutlinedIcon style={{ fontSize: 32 }} viewBox="0 0 32 32" />
    ),
  },
  {
    id: "USERS",
    title: "Users",
    url: "Users",
    icon: <PeopleAltOutlinedIcon />,
  },
  {
    id: "MEDICATION_Information",
    title: "Medication information",
    url: "/",
    icon: <MedicationOutlinedIcon />,
    subMenu: [
      {
        id: "MEDICATION",
        title: "Medications",
        url: "/",
        icon: <FeedOutlinedIcon />,
      },
      { id: "DCI", title: "dci", url: "/", icon: <FeedOutlinedIcon /> },
    ],
  },
  {
    id: "STATISTIQUE",
    title: "Statistique",
    url: "/",

    icon: <AutoGraphOutlinedIcon />,
  },
];
