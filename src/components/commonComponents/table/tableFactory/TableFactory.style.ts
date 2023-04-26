import * as React from "react";
import { Paper, PaperProps, styled } from "@mui/material";

export const StyledPaper = styled(Paper)<PaperProps>(({ theme }) => ({
  [theme.breakpoints.up("xl")]: {
    width: 1200,
  },
  [theme.breakpoints.down("xl")]: {
    width: 900,
  },
  [theme.breakpoints.down("lg")]: {
    width: 600,
  },
  [theme.breakpoints.down("md")]: {
    width: "100vw",
  },
}));
