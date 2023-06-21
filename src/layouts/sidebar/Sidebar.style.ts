import * as React from "react";
import { Box, BoxProps, Drawer, DrawerProps, styled } from "@mui/material";
import { Link, LinkProps } from "react-router-dom";
import { colors } from "../../core/constants/colors";

export const StyledBoxSideBar = styled(Box)<BoxProps>(({ theme }) => ({
  minHeight: "100%",
  minWidth: "15.625rem",
  justifyContent: "flex-start",
 // marginRight: "1rem",
  [theme.breakpoints.up("lg")]: {
    display: "block",
  },
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
}));

export const StyledLink = styled(Link)<LinkProps>(({ theme }) => ({
  minWidth: "100%",
  textAlign: "center",
  fontSize: "1rem",
  color: colors.containerColor,
  textDecoration: "none",
}));
export const StyledDrawer = styled(Drawer)<DrawerProps>(({ theme }) => ({
  "& .MuiDrawer-paper": {
    padding: "8rem 0",
    minWidth: "15.625rem",
    minHeight: "100%",
    justifyContent: "flex-start",
    backgroundColor: theme.palette.primary.dark,
  },
  [theme.breakpoints.up("lg")]: {
    display: "none",
  },
  [theme.breakpoints.down("lg")]: {
    display: "block",
  },
}));

export const StyledDrawerPermanent = styled(Drawer)<DrawerProps>(
  ({ theme }) => ({
    "& .MuiDrawer-paper": {
      padding: "6rem 0",
      minWidth: "15.625rem",
      justifyContent: "flex-start",
      border: "1px solid" && theme.palette.background.paper,
      backgroundColor: theme.palette.primary.dark,
    },
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
    [theme.breakpoints.up("lg")]: {
      display: "block",
    },
  })
);
