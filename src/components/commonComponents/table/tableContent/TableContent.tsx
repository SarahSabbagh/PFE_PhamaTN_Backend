import * as React from "react";
import TableBody from "@mui/material/TableBody";
import { TableContentProps } from "./TableContent.types";
import { CustomizedTableRow } from "../tableRows/CustomizedTableRow";

export const TableContent = <T, FormAddValues extends Record<string, any>>(
  props: React.PropsWithChildren<TableContentProps<T, FormAddValues>>
) => {
  const {
    actions,
    data,
    title,
    columns,
    handleActivationMode,
    handleUpdateUserStatus,
  } = props;
  return (
    <TableBody>
      {Array.isArray(data) &&
        data.map((item: T, index) => (
          <CustomizedTableRow
            handleActivationMode={handleActivationMode}
            handleUpdateUserStatus={handleUpdateUserStatus}
            editAction={actions?.edit}
            deleteAction={actions?.delete}
            key={index}
            title={title}
            item={item}
            columns={columns}
          />
        ))}
    </TableBody>
  );
};
