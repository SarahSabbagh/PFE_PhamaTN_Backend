import * as React from "react";
import { AppBar, AppBarProps, Grid, GridProps, styled } from "@mui/material";
interface styledAppBarProps {
  isAuthenticated: boolean;
}
export const StyledAppBar = styled(AppBar)<AppBarProps & styledAppBarProps>(
  ({ isAuthenticated, theme }) => ({
    position: !isAuthenticated ? "static" : "fixed",
    zIndex: theme.zIndex.drawer + 1,
    maxHeight: "4.6875rem",
    minWidth: "100%",
    marginBottom: "0.1rem",
    backgroundColor: theme.palette.background.default,
  })
);
export const StyledGrid = styled(Grid)<GridProps>(() => ({
  padding: "0 1rem",
}));
