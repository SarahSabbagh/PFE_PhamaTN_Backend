import * as React from "react";
import { CustomizedTableToolBar } from "../tableToolBar/TableToolBar";
import { TableFactoryProps } from "./TableFactory.types";
import { CustomizedTablePagination } from "../tablePagination/TablePagination";
import { TablePaginationProps } from "@mui/material";
import { StyledPaper } from "../../customPaper/StyledPaper.style";
import { CustomTableContainer } from "../tableContainer/TableContainer";
import { StyledGridTable } from "./TableFactory.style";

export const TableFactory = <T,>(
  props: React.PropsWithChildren<TableFactoryProps<T> & TablePaginationProps>
) => {
  const { count, data, actions, noToolBar } = props;
  return (
    <StyledGridTable>
      <StyledPaper elevation={3}>
        {!noToolBar && (
          <CustomizedTableToolBar
            filter={actions?.filter}
            add={actions?.add}
            {...props}
          />
        )}
        <CustomTableContainer<T> {...props} />
        {data && count > 0 && <CustomizedTablePagination {...props} />}
      </StyledPaper>
    </StyledGridTable>
  );
};
