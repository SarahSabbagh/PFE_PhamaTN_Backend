import * as React from "react";
import Table from "@mui/material/Table";
import { CustomizedTableHead } from "../tableHead/TableHead";
import { TableContent } from "../tableContent/TableContent";
import { LoadingTableContent } from "../tableContent/loadingTableContent/LoadingTableContent";
import { EmptyTableRow } from "../tableRows/CustomizedTableRow";
import { ErrorTableRow } from "../tableRows/ErrorTableRow";
import { TableContainerProps } from "./TableContainer.types";
import { StyledTableContainer } from "./TableContainer.style";

export const CustomTableContainer = <T,>(
  props: React.PropsWithChildren<TableContainerProps<T>>
) => {
  const {
    count,
    columns,
    data,
    title,
    actions,
    nestedAction,
    isError,
    handleActivationMode,
    handleUpdateUserStatus,
    handleModal,
  } = props;
  return (
    <StyledTableContainer>
      <Table stickyHeader size="small">
        <CustomizedTableHead {...props} />
        {data ? (
          count > 0 ? (
            <TableContent<T>
              columns={columns}
              data={data}
              title={title}
              actions={actions}
              nestedAction={nestedAction}
              handleActivationMode={handleActivationMode}
              handleUpdateUserStatus={handleUpdateUserStatus}
              handleModal={handleModal}
            />
          ) : (
            <EmptyTableRow />
          )
        ) : isError ? (
          <ErrorTableRow />
        ) : (
          <LoadingTableContent />
        )}
      </Table>
    </StyledTableContainer>
  );
};
