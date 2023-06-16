import * as React from "react";
import {
  Grid,
  GridProps,
  Typography,
  TypographyProps,
  styled,
} from "@mui/material";

export const StyledTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: "2rem",
  color: theme.palette.primary.main,
}));

export const StyledGridToolbar = styled(Grid)<GridProps>(() => ({
  paddinf: "1rem",
}));
