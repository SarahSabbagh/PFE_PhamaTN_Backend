import * as React from "react";
import TablePagination, {
  TablePaginationProps,
} from "@mui/material/TablePagination";
import { Grid } from "@mui/material";

export const CustomizedTablePagination = (props: TablePaginationProps) => {
  const {
    rowsPerPageOptions,
    onRowsPerPageChange,
    onPageChange,
    page,
    rowsPerPage,
    count,
  } = props;
  return (
    <TablePagination
      rowsPerPageOptions={rowsPerPageOptions}
      SelectProps={{ sx: { width: "5rem", height: "2.5rem" } }}
      component={Grid}
      count={count}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={onPageChange}
      onRowsPerPageChange={onRowsPerPageChange}
    />
  );
};
