import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import { Grid, Typography } from "@mui/material";
import { LogoNavbar } from "./logoNavbar/LogoNavbar";
import { StyledAppBar } from "./Navbar.style";
import { IconMenu } from "./iconMenu/IconMenu";
import { MenuList } from "./navMenu/NavMenu";
import { UserMenu } from "./userMenu/UserMenu";
import { useAccessToken } from "../../hooks/authHooks";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
const pagesAutnentication = [
  { route: "/login", name: "Login" },
  { route: "/register", name: "Register" },
];

const ResponsiveAppBar: React.FC = () => {
  const isAuthenticated: boolean = useAccessToken();
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
    <StyledAppBar isAuthenticated>
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
              <LogoNavbar logoxs />
              <Grid
                sx={{
                  position: "relative",
                  marginRight: "1rem",
                  cursor: "pointer",
                }}
              >
                <LanguageOutlinedIcon color="primary" />
              </Grid>
              <Grid
                sx={{
                  position: "relative",
                  marginRight: "1rem",
                  cursor: "pointer",
                }}
              >
                <NotificationsIcon color="primary" />
                <Grid
                  item
                  sx={{
                    position: "absolute",
                    top: "-.3rem",
                    right: ".7rem",
                  }}
                >
                  <Typography
                    color={"white"}
                    sx={{
                      height: 15,
                      width: 15,
                      position: "absolute",
                      fontSize: ".7rem",
                      fontWeight: "700",
                      bgcolor: "red",
                      borderRadius: "50%",
                      display: " flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    component={"span"}
                  >
                    2
                  </Typography>
                </Grid>
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
export default ResponsiveAppBar;
