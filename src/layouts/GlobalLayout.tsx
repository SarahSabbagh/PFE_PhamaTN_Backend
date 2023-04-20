import * as React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./footer/Footer";
import ResponsiveAppBar from "./navbar/Navbar";
import { Container, Grid } from "@mui/material";
import ResponsiveSideBar from "./sidebar/Sidebar";
interface ILayout {
  children: JSX.Element;
}
export const Layout: React.FC<ILayout> = (prop) => {
  return (
    <>
      <ResponsiveAppBar />
      <Grid container>
        <Grid item xs={3}>
          <ResponsiveSideBar />
        </Grid>
        <Grid item xs={9} mt={3}>
          {prop.children}
        </Grid>
      </Grid>
      <Footer />
    </>
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
