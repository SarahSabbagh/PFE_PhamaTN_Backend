import * as React from "react";
import { Paper, PaperProps, styled } from "@mui/material";

export const StyledSignUpPaper = styled(Paper)<PaperProps>(({ theme }) => ({
  width: "60vw",
  margin: "4rem auto",
  borderRadius: "0.7rem",
  [theme.breakpoints.down("md")]: {
    width: "100vw",
    minHeight: "100vh",
    margin: 0,
    borderRadius: 0,
  },
  [theme.breakpoints.up("md")]: {
    padding: "1.75rem",
    width: "70vw",
  },
  [theme.breakpoints.up("lg")]: {
    padding: "3rem",
    width: "60vw",
  },

  [theme.breakpoints.up("xxl")]: {
    padding: "4rem",
    width: "50vw",
  },
}));
