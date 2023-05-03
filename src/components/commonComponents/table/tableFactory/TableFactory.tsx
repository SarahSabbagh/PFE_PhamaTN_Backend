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
import { TablePaginationProps } from "@mui/material";

export const TableFactory = <T,>(
  props: React.PropsWithChildren<TableFactoryProps<T> & TablePaginationProps>
) => {
  const {
    count,
    columns,
    data,
    title,
    actions,
    isLoading,
    onRequestSort,
    sortOrder,
    sortBy,
    handleActivationMode,
    rowsPerPageOptions,
    onPageChange,
    onRowsPerPageChange,
    page,
    rowsPerPage,
    handleUpdateUserStatus,
    handleQueryChange,
  } = props;
  return (
    <StyledPaper elevation={3}>
      <CustomizedTableToolBar
        handleQueryChange={handleQueryChange}
        title={title}
        filter={actions?.filter}
        add={actions?.add}
        recievedFilterData={actions?.recievedFilterData}
      />
      <StyledTableContainer>
        <Table size="small" aria-label="simple table">
          <CustomizedTableHead
            onRequestSort={onRequestSort}
            sortOrder={sortOrder}
            sortBy={sortBy}
            columns={columns}
          />
          {isLoading ? (
            <LoadingTableContent />
          ) : data && count > 0 ? (
            <TableContent<T>
              columns={columns}
              data={data}
              actions={actions}
              handleActivationMode={handleActivationMode}
              handleUpdateUserStatus={handleUpdateUserStatus}
            />
          ) : (
            <EmptyTableRow />
          )}
        </Table>
        {data && count > 0 && (
          <CustomizedTablePagination
            rowsPerPageOptions={rowsPerPageOptions}
            count={count}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={onPageChange}
            onRowsPerPageChange={onRowsPerPageChange}
          />
        )}
      </StyledTableContainer>
    </StyledPaper>
  );
};
