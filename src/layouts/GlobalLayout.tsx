import * as React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./footer/Footer";
import ResponsiveAppBar from "./navbar/Navbar";
import { Grid } from "@mui/material";
import ResponsiveSideBar from "./navbar/Sidebar";

export const Layout: React.FC = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Grid container direction={"row"} sx={{ flexGrow: 1 }} columns={14}>
        <Grid item xs={2}>
          <ResponsiveSideBar />
        </Grid>
        <Grid item xs={12}>
          <Outlet />
        </Grid>
        <Footer />
      </Grid>
    </>
  );
};
