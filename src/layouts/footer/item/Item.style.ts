import * as React from "react";
import { Grid, GridProps, styled } from "@mui/material";
export const StyledGridItem = styled(Grid)<GridProps>(({ theme }) => ({
  padding: "0.5rem",
  marginTop:'0.5rem',
  justifyContent: "center",
  alignItems: "center",
}));
