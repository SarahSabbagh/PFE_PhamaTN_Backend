import * as React from "react";
import { Grid, GridProps, styled } from "@mui/material";

export const StyledGridTable = styled(Grid)<GridProps>(() => ({
  minWidth: "100%",
}));
