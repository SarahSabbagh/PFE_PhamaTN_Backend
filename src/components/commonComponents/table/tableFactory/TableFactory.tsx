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
import { FormAddProps } from "../../forms/addForm/AddForm.types";

export const TableFactory = <T, FormValues extends Record<string, any>>(
  props: React.PropsWithChildren<
    TableFactoryProps<T> & TablePaginationProps & FormAddProps<FormValues>
  >
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
    titleAddForm,
    defaultAddValues,
    addResolver,
    onSubmitAdd,
    isLoadingAddForm,
    isSuccessAddForm,
    handleClose,
    handleClickOpen,
    open,
  } = props;
  return (
    <StyledPaper elevation={3}>
      <CustomizedTableToolBar
        handleQueryChange={handleQueryChange}
        title={title}
        filter={actions?.filter}
        add={actions?.add}
        addFormType={actions?.addFormType}
        recievedFilterData={actions?.recievedFilterData}
        titleAddForm={titleAddForm}
        defaultAddValues={defaultAddValues}
        addResolver={addResolver}
        onSubmitAdd={onSubmitAdd}
        isLoadingAddForm={isLoadingAddForm}
        isSuccessAddForm={isSuccessAddForm}
        handleClose={handleClose}
        handleClickOpen={handleClickOpen}
        open={open}
      />
      <StyledTableContainer>
        <Table stickyHeader size="small" aria-label="simple table">
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
