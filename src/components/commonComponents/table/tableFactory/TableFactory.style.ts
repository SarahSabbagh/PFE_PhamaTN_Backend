import * as React from "react";
import { TableContainer, TableContainerProps } from "@mui/material";
import { Paper, PaperProps, styled } from "@mui/material";

export const StyledPaper = styled(Paper)<PaperProps>(({ theme }) => ({
  margin: "6rem 0 3rem 0",
  border: "1px solid" && theme.palette.background.paper,
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.down("lg") && theme.breakpoints.up("md")]: {
    padding: "1rem",
  },
  [theme.breakpoints.up("lg")]: {
    padding: "2rem",
  },
}));
export const StyledTableContainer = styled(TableContainer)<TableContainerProps>(
  ({ theme }) => ({
    padding: "1rem",
    [theme.breakpoints.up("xl")]: {
      minWidth: 1100,
    },
    [theme.breakpoints.up("lg")]: {
      width: 850,
    },
    [theme.breakpoints.down("lg")]: {
      width: 570,
    },

    [theme.breakpoints.down("md")]: {
      width: "100vw",
    },
  })
);
