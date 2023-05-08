import * as React from "react";
import { TableCell, TableCellProps, styled } from "@mui/material";
import { colors } from "../../../../../core/constants/colors";
import { StickyCellProps } from "../CustomizedTableRow.types";

export const StyledTableCell = styled(TableCell)<
  TableCellProps & StickyCellProps
>(({ headColumn, stickyColumn, stickyIndex, theme }) => ({
  minWidth: "5rem",
  backgroundColor: headColumn
    ? colors.grey.xlight
    : theme.palette.background.default,
  ...(stickyColumn && {
    position: "sticky",
    right: stickyIndex ? `calc(${stickyIndex} * 80px)` : 0,
  }),
}));
