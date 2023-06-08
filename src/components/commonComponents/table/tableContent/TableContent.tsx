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
            detailsAction={actions?.details}
            key={index}
            title={title}
            item={item}
            columns={columns}
          />
        ))}
    </TableBody>
  );
};
