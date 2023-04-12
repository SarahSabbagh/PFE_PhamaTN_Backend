import * as React from "react";
import { Grid, GridProps, styled } from "@mui/material";

export const StyledFooter = styled(Grid)<GridProps>(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  borderTop: "0.0625rem  ",
  borderColor: theme.palette.background.paper,
  margin: 0,
  minHeight: "4rem",
  justifyContent: "center",
  alignItems: "center",
}));
