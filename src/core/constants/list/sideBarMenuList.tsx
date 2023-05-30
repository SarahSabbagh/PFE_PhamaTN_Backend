import * as React from "react";
import MedicationOutlinedIcon from "@mui/icons-material/MedicationOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import { paths } from "../path";
import { colors } from "../colors";
import i18next from "i18next";

const translate = (key: string): string => i18next.t(key) || "";

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
    title: translate("SideBarMenuList.DASHBORAD"),
    url: paths.DASHBOARD,
    icon: <AutoGraphOutlinedIcon sx={{ color: colors.containerColor }} />,
  },
  {
    id: "USERS",
    title: translate("SideBarMenuList.USERS"),
    url: paths.USERS,
    icon: <PeopleAltOutlinedIcon sx={{ color: colors.containerColor }} />,
  },
  {
    id: " LOT",
    title: translate("SideBarMenuList.LOT"),
    url: paths.LOT,
    icon: <MedicalInformationIcon sx={{ color: colors.containerColor }} />,
  },
  {
    id: "MEDICATION",
    title: translate("SideBarMenuList.MEDICATION"),
    url: paths.MEDICATION,
    icon: <MedicationOutlinedIcon sx={{ color: colors.containerColor }} />,
  },
  {
    id: "DRUGS_INFO",
    title: translate("SideBarMenuList.DRUGS_INFO"),
    url: "",
    icon: <FeedOutlinedIcon sx={{ color: colors.containerColor }} />,
    subMenu: [
      {
        id: "DCI",
        title: translate("SideBarMenuList.DCI"),
        url: paths.DCI,
        icon: <FeedOutlinedIcon sx={{ color: colors.containerColor }} />,
      },
      {
        id: "MARQUE",
        title: translate("SideBarMenuList.MARQUE"),
        url: paths.MARQUE,
        icon: <FeedOutlinedIcon sx={{ color: colors.containerColor }} />,
      },
      {
        id: "CATEGORY",
        title: translate("SideBarMenuList.CATEGORY"),
        url: paths.CATEGORY,
        icon: <FeedOutlinedIcon sx={{ color: colors.containerColor }} />,
      },
      {
        id: "FORM",
        title: translate("SideBarMenuList.FORM"),
        url: paths.FORM,
        icon: <FeedOutlinedIcon sx={{ color: colors.containerColor }} />,
      },
    ],
  },
];
