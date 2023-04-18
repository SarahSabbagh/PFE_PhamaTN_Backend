import * as React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./footer/Footer";
import ResponsiveAppBar from "./navbar/Navbar";
import { Container, Grid } from "@mui/material";
import ResponsiveSideBar from "./sidebar/Sidebar";

export const Layout: React.FC = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Grid container>
        <Grid item xs={3}>
          <ResponsiveSideBar />
        </Grid>
        <Grid item xs={9} mt={3}>
          <Outlet />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};
export const LayoutLogin: React.FC = () => {
  return (
    <Grid>
      <ResponsiveAppBar />
      <Outlet />
      <Footer />
    </Grid>
  );
};
