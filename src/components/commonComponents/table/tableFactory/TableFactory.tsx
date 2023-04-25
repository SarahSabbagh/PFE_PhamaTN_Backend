import * as React from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { CustomizedTableToolBar } from "../tableToolBar/TableToolBar";
import { CustomizedTableHead } from "../tableHead/TableHead";
import { TableContent } from "../tableContent/TableContent";
import { TableFactoryProps } from "./TableFactory.types";
import { CustomizedTablePagination } from "../tablePagination/TablePagination";

export const TableFactory = <T,>(
  props: React.PropsWithChildren<TableFactoryProps<T>>
) => {
  const {
    handleChangeRowsPerPage,
    handleChangePage,
    page,
    rowsPerPage,
    columns,
    data,
    title,
    actions,
    rowsPerPageOptions,
    handleQueryChange,
  } = props;

  return (
    <Paper>
      <TableContainer>
        <CustomizedTableToolBar
          handleQueryChange={handleQueryChange}
          title={title}
        />
        <Table aria-label="simple table">
          <CustomizedTableHead columns={columns} />
          <TableContent<T>
            columns={columns}
            data={data}
            rowsPerPage={rowsPerPage}
            page={page}
            actions={actions}
          />
        </Table>
      </TableContainer>
      <CustomizedTablePagination<T>
        rowsPerPageOptions={rowsPerPageOptions}
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
