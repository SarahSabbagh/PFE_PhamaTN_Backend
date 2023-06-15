import * as React from "react";
import { Typography, TypographyProps, styled } from "@mui/material";

export const StyledTypography = styled(Typography)<TypographyProps>(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
