import * as React from "react";
import { Grid, GridProps, styled } from "@mui/material";
import { fonts } from "../../core/constants/fonts";

export const StyledFooter = styled(Grid)<GridProps>(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  zIndex: theme.zIndex.drawer + 1,
  borderTop: "0.0625rem  ",
  borderColor: theme.palette.background.paper,
  margin: 0,
  minHeight: "4rem",
  justifyContent: "center",
  alignItems: "center",
  minWidth: "100vw",
}));
