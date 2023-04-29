import * as React from "react";
import Table from "@mui/material/Table";
import { CustomizedTableToolBar } from "../tableToolBar/TableToolBar";
import { CustomizedTableHead } from "../tableHead/TableHead";
import { TableContent } from "../tableContent/TableContent";
import { TableFactoryProps } from "./TableFactory.types";
import { CustomizedTablePagination } from "../tablePagination/TablePagination";
import { LoadingTableContent } from "../tableContent/loadingTableContent/LoadingTableContent";
import { StyledPaper, StyledTableContainer } from "./TableFactory.style";
import { EmptyTableRow } from "../tableRows/CustomizedTableRow";

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
    recievedFilterData,
    rowsPerPageOptions,
    handleQueryChange,
  } = props;

  return (
    <StyledPaper elevation={3}>
      <CustomizedTableToolBar
        handleQueryChange={handleQueryChange}
        title={title}
        recievedFilterData={recievedFilterData}
      />
      <StyledTableContainer >
        <Table aria-label="simple table">
          <CustomizedTableHead columns={columns} />
          {isLoading ? (
            <LoadingTableContent />
          ) : data && data.length > 0 ? (
            <TableContent<T>
              columns={columns}
              data={data}
              rowsPerPage={rowsPerPage}
              page={page}
              actions={actions}
            />
          ) : (
            <EmptyTableRow />
          )}
        </Table>
        {data && data.length > 0 && (
          <CustomizedTablePagination<T>
            rowsPerPageOptions={rowsPerPageOptions}
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
          />
        )}
      </StyledTableContainer>
    </StyledPaper>
  );
};
