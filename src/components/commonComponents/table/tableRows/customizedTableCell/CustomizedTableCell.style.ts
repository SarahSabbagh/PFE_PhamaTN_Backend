import * as React from "react";
import { TableCell, TableCellProps, styled } from "@mui/material";
import { colors } from "../../../../../core/constants/colors";
import { StyledCellProps } from "./CustomizedTableCell.types";

export const StyledTableCell = styled(TableCell)<
  TableCellProps & StyledCellProps
>(({ headColumn, theme }) => ({
  minWidth: "5rem",
  backgroundColor: headColumn
    ? colors.grey.xlight
    : theme.palette.background.default,
}));
