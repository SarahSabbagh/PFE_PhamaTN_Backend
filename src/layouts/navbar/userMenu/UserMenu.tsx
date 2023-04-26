import * as React from "react";
import {
  Avatar,
  Badge,
  Box,
  Divider,
  Grid,
  ListItemIcon,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { StyledIconButton, StyledLink, StyledMenu } from "./UserMenu.style";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { NavbarProps } from "../Navbar.types";

function notificationsLabel(count: number) {
  if (count === 0) {
    return "no notifications";
  }
  if (count > 99) {
    return "more than 99 notifications";
  }
  return `${count} notifications`;
}

export const UserMenu: React.FC<NavbarProps> = (props) => {
  const { anchorEl, handleClose, handleOpen } = props;
  const handleLogout = () => {
    localStorage.clear();
  };

  return (
    <Grid item>
      <Box>
        <Tooltip title="Account settings">
          <StyledIconButton
            onClick={handleOpen}
            aria-label={notificationsLabel(100)}
          >
            <Badge
              badgeContent={100}
              color="error"
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <Avatar>A</Avatar>
            </Badge>
          </StyledIconButton>
        </Tooltip>
      </Box>
      <StyledMenu
        anchorEl={anchorEl}
        id="account-menu"
        open={Boolean(anchorEl)}
        onClose={handleClose}
        keepMounted
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonIcon fontSize="small" />
          </ListItemIcon>
          <StyledLink to="/Profile">Profile </StyledLink>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <NotificationsIcon fontSize="small" />
          </ListItemIcon>
          <StyledLink onClick={handleLogout} to="/">
            Notifications
          </StyledLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          <StyledLink to="/Settings">Settings</StyledLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          <StyledLink onClick={handleLogout} to="/login">
            Logout
          </StyledLink>
        </MenuItem>
      </StyledMenu>
    </Grid>
  );
};
