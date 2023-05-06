import * as React from "react";
import {
  Paper,
  PaperProps,
  styled,
  Typography,
  TypographyProps,
} from "@mui/material";

export const StyledSignInPaper = styled(Paper)<PaperProps>(({ theme }) => ({
  width: "30vw",
  minWidth: "20rem",
  margin: "2rem",
  padding: "2rem",
  border: "1px solid" && theme.palette.background.paper,
  backgroundColor: theme.palette.background.paper,
  borderRadius: "0.7rem",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  [theme.breakpoints.down("lg")]: {
    width: "40vw",
  },
  [theme.breakpoints.down("md")]: {
    width: "50vw",
  },
  [theme.breakpoints.down("sm")]: {
    minWidth: "100vw",
    minHeight: "100vh ",
    margin: 0,
    borderRadius: 0,
  },
}));

export const StyledTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  marginBottom: "2rem",
  [theme.breakpoints.down("sm")]: {
    marginBottom: "4rem",
  },
}));
