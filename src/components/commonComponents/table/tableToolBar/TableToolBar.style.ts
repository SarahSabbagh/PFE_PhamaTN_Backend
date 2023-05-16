import * as React from "react";
import { Typography, TypographyProps, styled } from "@mui/material";
export const StyledTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: "2.5rem",
  color: theme.palette.primary.main,
}));
