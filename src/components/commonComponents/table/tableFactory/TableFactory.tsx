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
    handleActivationMode,
    handleUpdateUserStatus,
    handleModal,
    isFetching,
    noToolBar,
  } = props;
  return (
    <StyledPaper elevation={3}>
      {!noToolBar && (
        <CustomizedTableToolBar
          filter={actions?.filter}
          add={actions?.add}
          {...props}
        />
      )}
      <StyledTableContainer>
        <Table stickyHeader size="small" aria-label="simple table">
          <CustomizedTableHead {...props} />
          {isLoading ? (
            <LoadingTableContent />
          ) : data && count > 0 ? (
            <TableContent<T>
              columns={columns}
              data={data}
              title={title}
              actions={actions}
              handleActivationMode={handleActivationMode}
              handleUpdateUserStatus={handleUpdateUserStatus}
              handleModal={handleModal}
            />
          ) : (
            <EmptyTableRow />
          )}
        </Table>
      </StyledTableContainer>
      {data && count > 0 && <CustomizedTablePagination {...props} />}
    </StyledPaper>
  );
};
