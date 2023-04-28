import * as React from "react";
import TableBody from "@mui/material/TableBody";
import { TableContentProps } from "./TableContent.types";
import { CustomizedTableRow } from "../tableRows/CustomizedTableRow";

export const TableContent = <T,>(
  props: React.PropsWithChildren<TableContentProps<T>>
) => {
  const { actions, data, columns, page, rowsPerPage } = props;
  return (
    <TableBody>
      {data
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((item: T, index) => (
          <CustomizedTableRow<T>
            actions={actions}
            key={index}
            item={item}
            columns={columns}
          />
        ))}
    </TableBody>
  );
};
