import * as React from "react";
import MedicationOutlinedIcon from "@mui/icons-material/MedicationOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
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
    icon: <AutoGraphOutlinedIcon />,
  },
  {
    id: "USERS",
    title: "Users",
    url: paths.USERS,
    icon: <PeopleAltOutlinedIcon />,
  },
  {
    id: " LOT",
    title: "Lots",
    url: paths.LOT,
    icon: <MedicalInformationIcon />,
  },
  {
    id: "MEDICATION",
    title: "Medications",
    url: paths.MEDICATION,
    icon: <MedicationOutlinedIcon />,
  },
  {
    id: "MEDICATION_Information",
    title: "Drugs Info",
    url: "",
    icon: <FeedOutlinedIcon />,
    subMenu: [
      { id: "DCI", title: "DCI", url: paths.DCI, icon: <FeedOutlinedIcon /> },
      {
        id: "MARQUE",
        title: "Marque",
        url: paths.MARQUE,
        icon: <FeedOutlinedIcon />,
      },
      {
        id: "CATEGORY",
        title: "Category",
        url: paths.CATEGORY,
        icon: <FeedOutlinedIcon />,
      },
      {
        id: "FORM",
        title: "Form",
        url: paths.FORM,
        icon: <FeedOutlinedIcon />,
      },
    ],
  },
];
