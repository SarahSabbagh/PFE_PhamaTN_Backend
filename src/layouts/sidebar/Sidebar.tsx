import * as React from "react";
import { Grid, IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import {
  StyledBoxSideBar,
  StyledDrawer,
  StyledDrawerPermanent,
} from "./Sidebar.style";
import { SidebarProps } from "./Sidebar.types";
import { ListSidebar } from "./listSideBar/ListSidebar";
import { Logo } from "../../components/commonComponents/logo/Logo";
import { colors } from "../../core/constants/colors";

export const ResponsiveSideBar: React.FC<SidebarProps> = (props) => {
  const { openDrawer, handleDrawerClose } = props;
  return (
    <>
      <StyledBoxSideBar>
        <StyledDrawerPermanent variant="permanent" anchor="left" open>
          <ListSidebar />
        </StyledDrawerPermanent>
      </StyledBoxSideBar>
      <StyledDrawer anchor="left" open={openDrawer} onClose={handleDrawerClose}>
        <Grid display="flex" justifyContent="center">
          <Logo sidebarLogo />
        </Grid>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon sx={{ color: colors.containerColor }} />
        </IconButton>
        <ListSidebar />
      </StyledDrawer>
    </>
  );
};
