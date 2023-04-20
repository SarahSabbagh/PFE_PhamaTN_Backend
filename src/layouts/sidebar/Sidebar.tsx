import * as React from "react";
import { IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import {
  StyledBoxSideBar,
  StyledDrawer,
  StyledDrawerPermanent,
} from "./Sidebar.style";
import { SidebarProps } from "./Sidebar.types";
import { ListSidebar } from "./ListSidebar";

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
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>

        <ListSidebar />
      </StyledDrawer>
    </StyledBoxSideBar>
  );
};
