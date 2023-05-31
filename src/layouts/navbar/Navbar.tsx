import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import { LogoNavbar } from "./logoNavbar/LogoNavbar";
import { StyledAppBar } from "./Navbar.style";
import { MenuList } from "./navMenu/NavMenu";
import { UserMenu } from "./userMenu/UserMenu";
import { useAccessToken } from "../../hooks/authHooks";
import { SidebarProps } from "../sidebar/Sidebar.types";
import { IconMenu } from "./iconMenu/IconMenu";
import { LanguageMenu } from "./languageMenu/LanguageMenu";
import { Grid } from "@mui/material";

export const ResponsiveAppBar: React.FC<SidebarProps> = (props) => {
  const { openDrawer, handleDrawerOpen, handleDrawerClose } = props;
  const isAuthenticated: boolean = useAccessToken();
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElLanguage, setAnchorElLanguage] =
    React.useState<null | HTMLElement>(null);
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleOpenLanguageMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElLanguage(event.currentTarget);
  };
  const handleCloseLanguageMenu = () => {
    setAnchorElLanguage(null);
  };
  return (
    <StyledAppBar isauthenticated={isAuthenticated}>
      <Grid>
        {!isAuthenticated && (
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <LogoNavbar isnotauthenticated={true} />
            <MenuList
              anchorEl={anchorElLanguage}
              handleClose={handleCloseLanguageMenu}
              handleOpen={handleOpenLanguageMenu}
              isauthenticated={true}
            />
          </Toolbar>
        )}

        {isAuthenticated && (
          <Toolbar>
            <LogoNavbar />
            <IconMenu
              openDrawer={openDrawer}
              handleDrawerClose={handleDrawerClose}
              handleDrawerOpen={handleDrawerOpen}
            />
            <LanguageMenu
              anchorEl={anchorElLanguage}
              handleClose={handleCloseLanguageMenu}
              handleOpen={handleOpenLanguageMenu}
            />
            <UserMenu
              anchorEl={anchorElUser}
              handleClose={handleCloseUserMenu}
              handleOpen={handleOpenUserMenu}
            />
          </Toolbar>
        )}
      </Grid>
    </StyledAppBar>
  );
};
