import * as React from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { CustomizedTableToolBar } from "../tableToolBar/TableToolBar";
import { CustomizedTableHead } from "../tableHead/TableHead";
import { TableContent } from "../tableContent/TableContent";
import { TableFactoryProps } from "./TableFactory.types";
import { CustomizedTablePagination } from "../tablePagination/TablePagination";
import { LoadingTableContent } from "../tableContent/loadingTableContent/LoadingTableContent";
import { StyledPaper } from "./TableFactory.style";

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
    isLoading,
    rowsPerPageOptions,
    handleQueryChange,
  } = props;

  return (
    <StyledPaper>
      <TableContainer>
        <CustomizedTableToolBar
          handleQueryChange={handleQueryChange}
          title={title}
        />
        <Table aria-label="simple table">
          <CustomizedTableHead columns={columns} />
          {isLoading ? (
            <LoadingTableContent />
          ) : (
            <TableContent<T>
              columns={columns}
              data={data}
              rowsPerPage={rowsPerPage}
              page={page}
              actions={actions}
            />
          )}
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
    </StyledPaper>
  );
};
