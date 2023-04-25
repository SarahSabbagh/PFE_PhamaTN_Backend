import * as React from "react";
import TableBody from "@mui/material/TableBody";
import { TableContentProps } from "./TableContent.types";
import { CustomizedTableRow } from "../tableRows/CustomizedTableRow";

export const TableContent = <T,>(
  props: React.PropsWithChildren<TableContentProps<T>>
) => {
  const { data, columns } = props;
  return (
    <TableBody>
      {data.map((item: T, index) => (
        <CustomizedTableRow<T> key={index} item={item} columns={columns} />
      ))}
    </TableBody>
  );
};
