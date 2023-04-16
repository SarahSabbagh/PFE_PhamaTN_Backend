import * as React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./footer/Footer";
import ResponsiveAppBar from "./navbar/Navbar";

export const Layout: React.FC = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Outlet />
      <Footer />
    </>
  );
};
