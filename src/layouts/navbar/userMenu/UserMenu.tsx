import * as React from "react";
import {
  Avatar,
  Box,
  Divider,
  ListItemIcon,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { StyledIconButton, StyledLink, StyledMenu } from "./UserMenu.style";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { NavbarProps } from "../Navbar.types";
import { useLogoutMutation } from "../../../redux/api/auth/authApi";

export const UserMenu: React.FC<NavbarProps> = (props) => {
  const { anchorEl, handleClose, handleOpen } = props;
  const [logout] = useLogoutMutation();
  const handleLogout = async () => {
    await logout();
  };

  return (
    <React.Fragment>
      <Box>
        <Tooltip title="Account settings">
          <StyledIconButton onClick={handleOpen} size="small">
            <Avatar>A</Avatar>
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
          <Avatar /> <StyledLink to="/Profile">Profile </StyledLink>
        </MenuItem>
        <Divider />

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
    </React.Fragment>
  );
};
