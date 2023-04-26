import * as React from "react";
import {
  List,
  ListItemIcon,
  ListItemIconProps,
  ListProps,
  styled,
} from "@mui/material";

export const StyledListItemIcon = styled(ListItemIcon)<ListItemIconProps>({
  minWidth: "2rem",
});
export const StyledList = styled(List)<ListProps>({
  minWidth: "100%",
});
