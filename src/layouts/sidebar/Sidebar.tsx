import * as React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import MedicationOutlinedIcon from "@mui/icons-material/MedicationOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import {
  StyledBoxSideBar,
  StyledLink,
  StyledTypography,
} from "./Sidebar.style";

const pages = [
  {
    name: "Dashboard",
    pages: [
      {
        route: "Dashboard",
        name: "Dashboard",
        icon: <DashboardOutlinedIcon />,
      },
    ],
  },
  {
    name: "users",
    pages: [{ route: "/", name: "users", icon: <PeopleAltOutlinedIcon /> }],
  },
  {
    name: "Medication information",
    pages: [
      {
        route: "/",
        name: "Medications",
        icon: <MedicationOutlinedIcon />,
      },
      { route: "/", name: "Dci", icon: <FeedOutlinedIcon /> },
    ],
  },
  {
    name: "Statistique",
    pages: [
      {
        route: "/",
        name: "Statistique",
        icon: <AutoGraphOutlinedIcon />,
      },
    ],
  },
];

const ResponsiveSideBar: React.FC = () => {
  return (
    <StyledBoxSideBar>
      <List>
        {pages.map((page) => (
          <>
            <StyledTypography>{page.name}</StyledTypography>
            {page.pages.map((nestedPage) => (
              <ListItem key={nestedPage.name} disablePadding>
                <StyledLink to={nestedPage.route}>
                  <ListItemButton key={nestedPage.name}>
                    <ListItemIcon>{nestedPage.icon}</ListItemIcon>
                    <ListItemText primary={nestedPage.name} />
                  </ListItemButton>
                </StyledLink>
              </ListItem>
            ))}
            <Divider />
          </>
        ))}
      </List>
    </StyledBoxSideBar>
  );
};
export default ResponsiveSideBar;
