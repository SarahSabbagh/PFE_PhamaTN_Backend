import * as React from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { CustomizedTableToolBar } from "../tableToolBar/TableToolBar";
import { CustomizedTableHead } from "../tableHead/TableHead";
import { TableContent } from "../tableContent/TableContent";
import { TableFactoryProps } from "./TableFactory.types";

export const TableFactory = <T,>(
  props: React.PropsWithChildren<TableFactoryProps<T>>
) => {
  const { columns, data, title, handleQueryChange } = props;

  return (
    <TableContainer component={Paper}>
      <CustomizedTableToolBar
        handleQueryChange={handleQueryChange}
        title={title}
      />
      <Table aria-label="simple table">
        <CustomizedTableHead columns={columns} />
        <TableContent<T> columns={columns} data={data} />
      </Table>
    </TableContainer>
  );
};
