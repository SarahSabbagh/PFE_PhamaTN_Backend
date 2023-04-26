import * as React from "react";
import { Grid, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { StyledBox } from "./IconMenu.style";
import { SidebarProps } from "../../sidebar/Sidebar.types";

export const IconMenu: React.FC<SidebarProps> = (props) => {
  const { openDrawer, handleDrawerOpen, handleDrawerClose } = props;
  return (
    <Grid container item xs>
      <StyledBox>
        <IconButton
          size="large"
          onClick={openDrawer ? handleDrawerClose : handleDrawerOpen}
          color="primary"
        >
          <MenuIcon fontSize="large" />
        </IconButton>
      </StyledBox>
    </Grid>
  );
};
