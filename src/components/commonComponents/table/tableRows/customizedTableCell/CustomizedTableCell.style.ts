import * as React from "react";
import {
  Paper,
  PaperProps,
  TableCell,
  TableCellProps,
  styled,
  tableCellClasses,
} from "@mui/material";
import { colors } from "../../../../../core/constants/colors";

export const StyledTableCell = styled(TableCell)<TableCellProps>(
  ({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: colors.grey.xlight,
    },
    [`&.${tableCellClasses.body}`]: {
      backgroundColor: theme.palette.background.default,
    },
  })
);
export const CollapseTablePaper = styled(Paper)<PaperProps>(({ theme }) => ({
  margin: " 1rem 0",
  padding: "1rem",
  border: "1px solid" && theme.palette.background.paper,
  backgroundColor: theme.palette.background.default,
}));
