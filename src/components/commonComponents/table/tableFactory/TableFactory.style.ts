import * as React from "react";
import { TableContainer, TableContainerProps } from "@mui/material";
import { Paper, PaperProps, styled } from "@mui/material";
import { colors } from "../../../../core/constants/colors";

export const StyledPaper = styled(Paper)<PaperProps>(({ theme }) => ({
  marginTop: "5rem",
  padding: "2rem",
  border: "1px solid" && theme.palette.background.paper,
  backgroundColor: colors.paper,
  [theme.breakpoints.down("lg") && theme.breakpoints.up("md")]: {
    padding: "1rem",
  },
  [theme.breakpoints.up("lg")]: {
    padding: "2rem",
  },
}));
export const StyledTableContainer = styled(TableContainer)<TableContainerProps>(
  ({ theme }) => ({
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
      padding: "1rem",
    },
  })
);
