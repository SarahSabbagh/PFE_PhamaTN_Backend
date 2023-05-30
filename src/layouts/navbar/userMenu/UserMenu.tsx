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
import { NavbarProps } from "../Navbar.types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { logout } from "../../../redux/features/userSlice";
import { userMenu } from "../../../core/constants/list/userMenu";

export const UserMenu: React.FC<NavbarProps> = (props) => {
  const dispatch = useDispatch();
  const { anchorEl, handleClose, handleOpen } = props;
  const notificationCount: number = useSelector(
    (state: RootState) => state.notification.notificationCount
  );

  const handleLogout = () => {
    localStorage.clear();
    dispatch(logout());
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
        {userMenu.map((item) => (
          <MenuItem
            key={item.id}
            onClick={item.id === "LOGOUT" ? handleLogout : handleClose}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <StyledLink to={item.url}>{item.title} </StyledLink>
          </MenuItem>
        ))}
      </StyledMenu>
    </Grid>
  );
};
