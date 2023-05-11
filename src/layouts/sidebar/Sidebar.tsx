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

export const ResponsiveSideBar: React.FC<SidebarProps> = (props) => {
  const { openDrawer, handleDrawerClose } = props;
  return (
    <StyledBoxSideBar>
      <StyledDrawerPermanent variant="permanent" anchor="left" open>
        <ListSidebar />
      </StyledDrawerPermanent>
      <StyledDrawer
        variant="persistent"
        anchor="left"
        open={openDrawer}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <Grid display="flex" justifyContent="center">
          <Logo sidebarLogo />
        </Grid>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
        <ListSidebar />
      </StyledDrawer>
    </StyledBoxSideBar>
  );
};
