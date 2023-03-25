import * as React from "react";
import { Paper, PaperProps, styled } from "@mui/material";

export const StyledSignUpPaper = styled(Paper)<PaperProps>(({ theme }) => ({
  width: "60vw",
  margin: "4rem",
  [theme.breakpoints.down("sm")]: {
    width: "100vw",
    minHeight: "100vh",
    margin: 0,
    borderRadius: 0,
  },
  [theme.breakpoints.down("md")]: {
    padding: "1.75rem",
  },
  [theme.breakpoints.up("lg")]: {
    padding: "3rem",
  },
}));
