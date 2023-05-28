import * as React from "react";
import { TableContainer, TableContainerProps } from "@mui/material";
import { styled } from "@mui/material";

export const StyledTableContainer = styled(TableContainer)<TableContainerProps>(
  ({ theme }) => ({
    //padding: "1rem",
    maxHeight: "30rem",
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
