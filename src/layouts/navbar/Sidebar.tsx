import * as React from "react";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { StyledButton, StyledLink } from "./navMenu/NavMenu.style";
import { NavbarProps } from "./Navbar.types";
import { Link } from "react-router-dom";

const pagesAutnentication = [
  { route: "/login", name: "Login" },
  { route: "/register", name: "Register" },
];
const pages = [
  { route: "Dashboard", name: "Dashboard" },
  { route: "/", name: "Home" },
  { route: "/", name: "Home" },
  { route: "/", name: "Home" },
  { route: "/", name: "Home" },
];

const ResponsiveSideBar: React.FC<NavbarProps> = (props) => {
  return (
    <>
      <Toolbar />
      <Box
        sx={{
          bgcolor: "red",
          minHeight: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <List>
          {pages.map((page, index) => (
            <ListItem key={page.name} disablePadding>
              <ListItemButton LinkComponent={Link} href={page.route}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={page.name} />
              </ListItemButton>

              {index % 2 === 0 ? <Divider /> : <Divider />}
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
};
export default ResponsiveSideBar;
