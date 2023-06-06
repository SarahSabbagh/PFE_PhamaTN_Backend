import * as React from "react";
import { TableContainer, TableContainerProps, styled } from "@mui/material";

export const StyledTableContainer = styled(TableContainer)<TableContainerProps>(
  () => ({
    maxHeight: "30rem",
    width: "100%",
  })
);
