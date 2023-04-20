import * as React from "react";
import { AppBar, AppBarProps, styled } from "@mui/material";
interface styledAppBarProps {
  isAuthenticated: boolean;
}
export const StyledAppBar = styled(AppBar)<AppBarProps & styledAppBarProps>(
  ({ isAuthenticated, theme }) => ({
    position: !isAuthenticated ? "static" : "fixed",
    zIndex: theme.zIndex.drawer + 1,
    padding: " 0.5rem",
    height: "75px",
    minWidth: "100vw",
    margin: 0,
    backgroundColor: theme.palette.background.default,
  })
);
