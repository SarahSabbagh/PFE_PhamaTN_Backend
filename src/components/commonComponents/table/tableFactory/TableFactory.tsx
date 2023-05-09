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

export const TableFactory = <T, FormValues extends Record<string, any>>(
  props: React.PropsWithChildren<
    TableFactoryProps<T, FormValues> & TablePaginationProps
  >
) => {
  const {
    count,
    columns,
    data,
    actions,
    isLoading,
    handleActivationMode,
    handleUpdateUserStatus,
    isFetching,
  } = props;
  return (
    <StyledPaper elevation={3}>
      <CustomizedTableToolBar
        filter={actions?.filter}
        add={actions?.add}
        {...props}
      />
      <StyledTableContainer>
        <Table stickyHeader size="small" aria-label="simple table">
          <CustomizedTableHead {...props} />
          {isLoading || isFetching ? (
            <LoadingTableContent />
          ) : data && count > 0 ? (
            <TableContent<T, FormValues>
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
      </StyledTableContainer>{" "}
      {data && count > 0 && <CustomizedTablePagination {...props} />}
    </StyledPaper>
  );
};
