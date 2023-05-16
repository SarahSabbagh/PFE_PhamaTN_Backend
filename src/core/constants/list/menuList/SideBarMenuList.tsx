import * as React from "react";
import MedicationOutlinedIcon from "@mui/icons-material/MedicationOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import { paths } from "../../path";
import { colors } from "../../colors";

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
    icon: <AutoGraphOutlinedIcon sx={{ color:  colors.containerColor }} />,
  },
  {
    id: "USERS",
    title: "Users",
    url: paths.USERS,
    icon: <PeopleAltOutlinedIcon sx={{ color:  colors.containerColor }} />,
  },
  {
    id: " LOT",
    title: "Lots",
    url: paths.LOT,
    icon: <MedicalInformationIcon sx={{ color:  colors.containerColor }} />,
  },
  {
    id: "MEDICATION",
    title: "Medications",
    url: paths.MEDICATION,
    icon: <MedicationOutlinedIcon sx={{ color:  colors.containerColor }} />,
  },
  {
    id: "MEDICATION_Information",
    title: "Drugs Info",
    url: "",
    icon: <FeedOutlinedIcon sx={{ color:  colors.containerColor }} />,
    subMenu: [
      {
        id: "DCI",
        title: "DCI",
        url: paths.DCI,
        icon: <FeedOutlinedIcon sx={{ color:  colors.containerColor }} />,
      },
      {
        id: "MARQUE",
        title: "Marque",
        url: paths.MARQUE,
        icon: <FeedOutlinedIcon sx={{ color:  colors.containerColor }} />,
      },
      {
        id: "CATEGORY",
        title: "Category",
        url: paths.CATEGORY,
        icon: <FeedOutlinedIcon sx={{ color:  colors.containerColor }} />,
      },
      {
        id: "FORM",
        title: "Form",
        url: paths.FORM,
        icon: <FeedOutlinedIcon sx={{ color:  colors.containerColor }} />,
      },
    ],
  },
];
