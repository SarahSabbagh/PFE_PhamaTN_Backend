import * as React from "react";
import TablePagination from "@mui/material/TablePagination";

import { CustomizedTablePaginationProps } from "./TablePagination.type";

export const CustomizedTablePagination = <T,>(
  props: React.PropsWithChildren<CustomizedTablePaginationProps<T>>
) => {
  const {
    handleChangeRowsPerPage,
    handleChangePage,
    page,
    rowsPerPage,
    count,
  } = props;
  return (
    <TablePagination
      // sx={{ width: "100%" }}
      rowsPerPageOptions={[1, 10, 25, 100]}
      SelectProps={{ sx: { width: "5rem", height: "2.5rem" } }}
      component="div"
      count={count}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
};
