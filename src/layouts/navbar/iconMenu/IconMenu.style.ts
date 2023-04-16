import * as React from "react";
import { Box, BoxProps, Menu, MenuProps, styled } from "@mui/material";
import { Link, LinkProps } from "react-router-dom";

export const StyledMenu = styled(Menu)<MenuProps>(({ theme }) => ({
  "& .MuiPaper-root": {
    overflow: "visible",
    marginTop: 0,

    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      left: "0.875rem",
      width: "0.625rem",
      height: "0.625rem",
      backgroundColor: theme.palette.background.paper,
      transform: "translateY(-50%) rotate(45deg)",
      zIndex: 0,
    },
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
}));

export const StyledBox = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));
export const StyledLink = styled(Link)<LinkProps>(({ theme }) => ({
  textAlign: "center",
  fontSize: "1rem",
  color: theme.palette.text.primary,
  textDecoration: "none",
}));
