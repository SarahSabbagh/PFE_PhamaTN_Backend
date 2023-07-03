import * as React from "react";
import {
  Avatar,
  Box,
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
import { RootState, persistor } from "../../../redux/store";
import { logout } from "../../../redux/features/userSlice";
import { userMenu } from "../../../core/constants/list/userMenu";
import { useAppropriateMenu } from "../../../hooks/translatedMenuHook";
import { useCurrentUser } from "../../../hooks/useCurrentUser";
import { STORAGE_BASE_URL } from "../../../configuredURL";
import { Item } from "../../footer/item/Item";

export const UserMenu: React.FC<NavbarProps> = (props) => {
  const dispatch = useDispatch();
  const { anchorEl, handleClose, handleOpen } = props;
  const notificationCount: number = useSelector(
    (state: RootState) => state.notification.notificationCount
  );
  const { user } = useCurrentUser();
  const translatedMenuList = useAppropriateMenu(userMenu);
  const handleLogout = () => {
    localStorage.clear();
    persistor.purge();
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
              <Avatar src={user?.image ? STORAGE_BASE_URL + user.image : ""} />
            </StyledBadge>
          </StyledIconButton>
        </Tooltip>
      </Box>
      <StyledMenu
        anchorEl={anchorEl}
        id="account-menu"
        open={Boolean(anchorEl)}
        onClose={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {translatedMenuList.map((item) => (
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
