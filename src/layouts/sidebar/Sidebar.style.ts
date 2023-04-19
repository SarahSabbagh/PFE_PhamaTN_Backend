import * as React from "react";
import { Box, BoxProps, styled } from "@mui/material";
import { colors } from "../../core/constants/colors";
import { Link, LinkProps } from "react-router-dom";

export const StyledBoxSideBar = styled(Box)<BoxProps>(() => ({
  minHeight: "100%",
  justifyContent: "center",
  alignItems: "center",
  padding: "0.2rem",
  borderRight: 0.5,
  borderRightColor: colors.grey.main,
}));

export const StyledLink = styled(Link)<LinkProps>(({ theme }) => ({
  textAlign: "center",
  fontSize: "1rem",
  color: theme.palette.text.primary,
  textDecoration: "none",
}));
