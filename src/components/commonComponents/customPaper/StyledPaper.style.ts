import * as React from "react";
import { Paper, PaperProps, styled } from "@mui/material";

export const StyledPaper = styled(Paper)<PaperProps>(({ theme }) => ({
  margin: "6rem auto 3rem auto",
  border: "1px solid" && theme.palette.background.paper,
  backgroundColor: theme.palette.background.default,
  width: "100%",
  [theme.breakpoints.up("lg")]: {
    padding: "2rem",
  },
  [theme.breakpoints.only("lg")]: {
    padding: "2rem",
    maxWidth: "900px",
  },
  [theme.breakpoints.down("lg")]: {
    width: "100vw",
    padding: "1rem",
    margin: "6rem 0 3rem 0",
  },
}));
