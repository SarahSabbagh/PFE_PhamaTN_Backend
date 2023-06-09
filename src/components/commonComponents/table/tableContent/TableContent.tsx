import * as React from "react";
import TableBody from "@mui/material/TableBody";
import { TableContentProps } from "./TableContent.types";
import { CustomizedTableRow } from "../tableRows/CustomizedTableRow";

export const TableContent = <T,>(
  props: React.PropsWithChildren<TableContentProps<T>>
) => {
  const {
    actions,
    nestedAction,
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
            deleteAction={actions?.delete}
            editAction={actions?.edit}
            key={index}
            nestedAction={nestedAction}
            title={title}
            item={item}
            columns={columns}
          />
        ))}
    </TableBody>
  );
};
