import * as React from "react";
import {
  Box,
  BoxProps,
  Drawer,
  DrawerProps,
  styled,
} from "@mui/material";
import { Link, LinkProps } from "react-router-dom";

export const StyledBoxSideBar = styled(Box)<BoxProps>(({ theme }) => ({
  minHeight: "100%",
  [theme.breakpoints.up("md")]: {
    minWidth: "15.625rem",
  },
  justifyContent: "flex-start",
}));

export const StyledLink = styled(Link)<LinkProps>(({ theme }) => ({
  minWidth: "100%",
  textAlign: "center",
  fontSize: "1rem",
  color: theme.palette.text.primary,
  textDecoration: "none",
}));
export const StyledDrawer = styled(Drawer)<DrawerProps>(({ theme }) => ({
  "& .MuiDrawer-paper": {
    padding: "8rem 0",
    minWidth: "15.625rem",
    justifyContent: "flex-start",
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
      minWidth: "15.625rem",
      justifyContent: "flex-start",
      marginTop: "4rem",
      border: "1px solid" && theme.palette.background.paper,
      backgroundColor: theme.palette.background.default,
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  })
);

