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
const pagesAutnentication = [
  { route: "/login", name: "Login" },
  { route: "/register", name: "Register" },
];

export const ResponsiveAppBar: React.FC<SidebarProps> = (props) => {
  const { openDrawer, handleDrawerOpen, handleDrawerClose } = props;
  const isAuthenticated: boolean = useAccessToken();

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <StyledAppBar isAuthenticated={isAuthenticated}>
      <Grid width="97vw">
        <Toolbar disableGutters>
          {!isAuthenticated && (
            <>
              <LogoNavbar isNotAuthenticated />
              <MenuList pages={pagesAutnentication} isAuthenticated />
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
