import * as React from "react";
import { AppBar, AppBarProps, styled } from "@mui/material";

export const StyledAppBar = styled(AppBar)<AppBarProps>(({ theme }) => ({
  padding: " 0.5rem",
  minHeight: "3rem",
  maxHeight: "4.5rem",
  minWidth: "100vw",
  margin: 0,
  backgroundColor: theme.palette.background.default,
}));
