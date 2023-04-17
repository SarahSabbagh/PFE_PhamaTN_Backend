import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import { Grid } from "@mui/material";
import { LogoNavbar } from "./logoNavbar/LogoNavbar";
import { StyledAppBar } from "./Navbar.style";
import { IconMenu } from "./iconMenu/IconMenu";
import { MenuList } from "./navMenu/NavMenu";
import { UserMenu } from "./userMenu/UserMenu";
import { useAccessToken } from "../../hooks/authHooks";

const pagesAutnentication = [
  { route: "/login", name: "Login" },
  { route: "/register", name: "Register" },
];
const pages = [
  { route: "Dashboard", name: "Dashboard" },
  { route: "/", name: "Home" },
];
const ResponsiveAppBar: React.FC = () => {
  const isAuthenticated = useAccessToken();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <StyledAppBar>
      <Grid width="95vw">
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
                pages={pages}
                anchorEl={anchorElNav}
                handleClose={handleCloseNavMenu}
                handleOpen={handleOpenNavMenu}
              />
              <LogoNavbar logoxs />
              <MenuList
                anchorEl={anchorElNav}
                handleClose={handleCloseNavMenu}
                handleOpen={handleOpenNavMenu}
                pages={pages}
              />
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
export default ResponsiveAppBar;
