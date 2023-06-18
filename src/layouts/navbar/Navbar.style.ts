import * as React from "react";
import {
  AppBar,
  AppBarProps,
  Toolbar,
  ToolbarProps,
  styled,
} from "@mui/material";
interface styledAppBarProps {
  isauthenticated: boolean;
}
export const StyledAppBar = styled(AppBar)<AppBarProps & styledAppBarProps>(
  ({ isauthenticated, theme }) => ({
    position: !isauthenticated ? "static" : "fixed",
    zIndex: theme.zIndex.drawer + 1,
    maxHeight: "4.6875rem",
    minWidth: "100%",
    marginBottom: "0.1rem",
    padding: "0.25rem",
    backgroundColor: theme.palette.background.default,
  })
);

export const StyledToolbar = styled(Toolbar)<ToolbarProps>(() => ({
  justifyContent: "space-between",
}));
