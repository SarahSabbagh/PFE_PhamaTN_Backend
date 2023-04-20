import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import { Grid } from "@mui/material";
import { LogoNavbar } from "./logoNavbar/LogoNavbar";
import { StyledAppBar } from "./Navbar.style";
import { MenuList } from "./navMenu/NavMenu";
import { UserMenu } from "./userMenu/UserMenu";
import { useAccessToken } from "../../hooks/authHooks";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import { SidebarProps } from "../sidebar/Sidebar.types";
import { IconMenu } from "./iconMenu/IconMenu";
import { useLocation } from "react-router-dom";
import { paths } from "../../core/constants/path";
const pageLogin = [{ route: paths.LOGIN, name: "Login" }];
const pageRegister = [{ route: paths.REGISTER, name: "Register" }];

export const ResponsiveAppBar: React.FC<SidebarProps> = (props) => {
  const { openDrawer, handleDrawerOpen, handleDrawerClose } = props;
  const isAuthenticated: boolean = useAccessToken();
  const location = useLocation();

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const isCurrentURL = (url: string) => {
    return location.pathname.toLowerCase() === url.toLowerCase();
  };
  return (
    <StyledAppBar isAuthenticated={isAuthenticated}>
      <Grid width="97vw">
        <Toolbar disableGutters>
          {!isAuthenticated && (
            <>
              <LogoNavbar isNotAuthenticated />
              <MenuList
                pages={isCurrentURL(paths.LOGIN) ? pageRegister : pageLogin}
                isAuthenticated
              />
            </>
          )}

          {isAuthenticated && (
            <>
              <LogoNavbar />
              <IconMenu
                openDrawer={openDrawer}
                handleDrawerClose={handleDrawerClose}
                handleDrawerOpen={handleDrawerOpen}
              />

              <Grid
                sx={{
                  position: "relative",
                  marginRight: "1rem",
                  cursor: "pointer",
                }}
              >
                <LanguageOutlinedIcon color="primary" fontSize="large" />
              </Grid>
              <UserMenu
                anchorEl={anchorElUser}
                handleClose={handleCloseUserMenu}
                handleOpen={handleOpenUserMenu}
              />
            </>
          )}
        </Toolbar>
      </Grid>
    </StyledAppBar>
  );
};
