import * as React from "react";
import {
  Avatar,
  Box,
  Divider,
  Grid,
  ListItemIcon,
  MenuItem,
  Tooltip,
} from "@mui/material";
import {
  StyledBadge,
  StyledIconButton,
  StyledLink,
  StyledMenu,
} from "./UserMenu.style";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { NavbarProps } from "../Navbar.types";
import { paths } from "../../../core/constants/path";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

export const UserMenu: React.FC<NavbarProps> = (props) => {
  const { anchorEl, handleClose, handleOpen } = props;
  const notificationCount: number = useSelector(
    (state: RootState) => state.notification.notificationCount
  );

  const handleLogout = () => {
    localStorage.clear();
  };

  return (
    <Grid item>
      <Box>
        <Tooltip title="Account settings">
          <StyledIconButton onClick={handleOpen}>
            <StyledBadge
              badgeContent={notificationCount}
              color="error"
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <Avatar>A</Avatar>
            </StyledBadge>
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
          <StyledLink to={paths.NOTIFICATION}>Notifications</StyledLink>
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
