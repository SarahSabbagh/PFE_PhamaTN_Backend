import * as React from "react";
import { Footer } from "./footer/Footer";
import { Grid } from "@mui/material";
import{ ResponsiveSideBar} from "./sidebar/Sidebar";
import {ResponsiveAppBar} from "./navbar/Navbar";
interface ILayout {
  children: JSX.Element;
}
const drawerWidth = 110;

export const Layout: React.FC<ILayout> = (prop) => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Grid container>
      <ResponsiveAppBar
        openDrawer={open}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />
      <Grid container item>
        <Grid item md={3} lg={2}>
          <ResponsiveSideBar
            openDrawer={open}
            handleDrawerClose={handleDrawerClose}
          />
        </Grid>
        <Grid item xs>
          {prop.children}
        </Grid>
      </Grid>
      <Footer />
    </Grid>
  );
};
export const LayoutLogin: React.FC<ILayout> = (prop) => {
  return (
    <Grid>
      <ResponsiveAppBar />
      {prop.children}
      <Footer />
    </Grid>
  );
};
