import * as React from "react";
import { TableContainer, TableContainerProps, styled } from "@mui/material";

export const StyledTableContainer = styled(TableContainer)<TableContainerProps>(
  () => ({
    maxHeight: "40rem",
    width: "100%",
  })
);
