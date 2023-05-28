import * as React from "react";
import { Paper, PaperProps, styled } from "@mui/material";

export const StyledPaper = styled(Paper)<PaperProps>(({ theme }) => ({
  margin: "6rem 0 3rem 0",
  border: "1px solid" && theme.palette.background.paper,
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.down("lg")]: {
    padding: "1rem",
  },
  [theme.breakpoints.up("lg")]: {
    padding: "2rem",
  },
}));