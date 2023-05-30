import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import { LogoNavbar } from "./logoNavbar/LogoNavbar";
import { StyledAppBar, StyledGrid } from "./Navbar.style";
import { MenuList } from "./navMenu/NavMenu";
import { UserMenu } from "./userMenu/UserMenu";
import { useAccessToken } from "../../hooks/authHooks";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import { SidebarProps } from "../sidebar/Sidebar.types";
import { IconMenu } from "./iconMenu/IconMenu";
import { StyledIconButton } from "./userMenu/UserMenu.style";

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
      <StyledGrid>
        {!isAuthenticated && (
          <Toolbar disableGutters>
            <LogoNavbar isNotAuthenticated />
            <MenuList isAuthenticated />
          </Toolbar>
        )}

        {isAuthenticated && (
          <Toolbar disableGutters>
            <LogoNavbar />
            <IconMenu
              openDrawer={openDrawer}
              handleDrawerClose={handleDrawerClose}
              handleDrawerOpen={handleDrawerOpen}
            />

            <StyledIconButton>
              <LanguageOutlinedIcon color="primary" fontSize="large" />
            </StyledIconButton>

            <UserMenu
              anchorEl={anchorElUser}
              handleClose={handleCloseUserMenu}
              handleOpen={handleOpenUserMenu}
            />
          </Toolbar>
        )}
      </StyledGrid>
    </StyledAppBar>
  );
};
