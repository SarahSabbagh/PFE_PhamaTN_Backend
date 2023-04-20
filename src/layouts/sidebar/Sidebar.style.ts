import * as React from "react";
import { Box, BoxProps, Drawer, DrawerProps, styled } from "@mui/material";
import { Link, LinkProps } from "react-router-dom";

export const StyledBoxSideBar = styled(Box)<BoxProps>(() => ({
  minHeight: "100%",
  //paddingTop: 80,
  width: "100%",
  justifyContent: "flex-start",
}));

export const StyledLink = styled(Link)<LinkProps>(({ theme }) => ({
  textAlign: "center",
  fontSize: "1rem",
  color: theme.palette.text.primary,
  textDecoration: "none",
}));
export const StyledDrawer = styled(Drawer)<DrawerProps>(({ theme }) => ({
  // padding: 0,

  "&.MuiDrawer-paper": {
    // padding: 0,
  },
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));
export const StyledDrawerPermanent = styled(Drawer)<DrawerProps>(
  ({ theme }) => ({
    "& .MuiDrawer-paper": {
      padding: "8rem 0",
      justifyContent: "flex-start",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  })
);
