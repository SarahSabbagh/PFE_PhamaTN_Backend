import * as React from "react";
import TableBody from "@mui/material/TableBody";
import { TableContentProps } from "./TableContent.types";
import { CustomizedTableRow } from "../tableRows/CustomizedTableRow";

export const TableContent = <T,>(
  props: React.PropsWithChildren<TableContentProps<T>>
) => {
  const {
    actions,
    data,
    columns,
    handleActivationMode,
    handleUpdateUserStatus,
  } = props;
  return (
    <TableBody>
      {Array.isArray(data) &&
        data.map((item: T, index) => (
          <CustomizedTableRow<T>
            handleActivationMode={handleActivationMode}
            handleUpdateUserStatus={handleUpdateUserStatus}
            actions={actions}
            key={index}
            item={item}
            columns={columns}
          />
        ))}
    </TableBody>
  );
};
