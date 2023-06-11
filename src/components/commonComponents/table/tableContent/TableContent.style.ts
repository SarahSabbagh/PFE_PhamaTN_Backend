import * as React from "react";
import { TableCell, TableCellProps, styled } from "@mui/material";

export const StyledTableCell = styled(TableCell)<TableCellProps>(() => ({
  height: "7rem",
}));
