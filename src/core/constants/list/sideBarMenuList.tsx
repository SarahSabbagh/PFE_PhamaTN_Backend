import * as React from "react";
import MedicationOutlinedIcon from "@mui/icons-material/MedicationOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import { paths } from "../path";
import { colors } from "../colors";
import { rolesValue } from "../roles";

export interface ISideBarMenuList {
  id: string;
  title: string;
  url: string;
  icon?: JSX.Element;
  roles?: string[];
  subMenu?: ISubMenu[];
}
export interface ISubMenu {
  id: string;
  title: string;
  roles: string[];
  url: string;
  icon?: JSX.Element;
}

export const SideBarMenuList: ISideBarMenuList[] = [
  {
    id: "DASHBOARD",
    title: "SideBarMenuList.DASHBORAD",
    url: paths.DASHBOARD,
    roles: [
      rolesValue.ADMINISTRATOR,
      rolesValue.WHOLESALER,
      rolesValue.PHARMACY,
    ],
    icon: <AutoGraphOutlinedIcon sx={{ color: colors.containerColor }} />,
  },
  {
    id: "USERS",
    title: "SideBarMenuList.USERS",
    url: paths.USERS,
    roles: [rolesValue.ADMINISTRATOR],
    icon: <PeopleAltOutlinedIcon sx={{ color: colors.containerColor }} />,
  },
  {
    id: "STOCK",
    title: "SideBarMenuList.STOCK",
    url: paths.STOCK,
    roles: [rolesValue.WHOLESALER, rolesValue.PHARMACY],
    icon: <MedicationOutlinedIcon sx={{ color: colors.containerColor }} />,
  },
  {
    id: "LOT",
    title: "SideBarMenuList.LOT",
    url: paths.LOT,
    roles: [
      rolesValue.ADMINISTRATOR,
      rolesValue.WHOLESALER,
      rolesValue.PHARMACY,
    ],
    icon: <MedicalInformationIcon sx={{ color: colors.containerColor }} />,
  },
  {
    id: "MEDICATION",
    title: "SideBarMenuList.MEDICATION",
    url: paths.MEDICATION,
    roles: [
      rolesValue.ADMINISTRATOR,
      rolesValue.WHOLESALER,
      rolesValue.PHARMACY,
    ],
    icon: <MedicationOutlinedIcon sx={{ color: colors.containerColor }} />,
  },

  {
    id: "DRUGS_INFO",
    title: "SideBarMenuList.DRUGS_INFO",
    url: "",
    roles: [rolesValue.ADMINISTRATOR],
    icon: <FeedOutlinedIcon sx={{ color: colors.containerColor }} />,
    subMenu: [
      {
        id: "DCI",
        title: "SideBarMenuList.DCI",
        url: paths.DCI,
        roles: [rolesValue.ADMINISTRATOR],
        icon: <FeedOutlinedIcon sx={{ color: colors.containerColor }} />,
      },
      {
        id: "MARQUE",
        title: "SideBarMenuList.MARQUE",
        url: paths.MARQUE,
        roles: [rolesValue.ADMINISTRATOR],
        icon: <FeedOutlinedIcon sx={{ color: colors.containerColor }} />,
      },
      {
        id: "CATEGORY",
        title: "SideBarMenuList.CATEGORY",
        url: paths.CATEGORY,
        roles: [rolesValue.ADMINISTRATOR],
        icon: <FeedOutlinedIcon sx={{ color: colors.containerColor }} />,
      },
      {
        id: "FORM",
        title: "SideBarMenuList.FORM",
        url: paths.FORM,
        roles: [rolesValue.ADMINISTRATOR],
        icon: <FeedOutlinedIcon sx={{ color: colors.containerColor }} />,
      },
    ],
  },
];
