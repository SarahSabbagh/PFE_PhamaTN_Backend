import * as React from "react";
import TableBody from "@mui/material/TableBody";
import { TableContentProps } from "./TableContent.types";
import { CustomizedTableRow } from "../tableRows/CustomizedTableRow";

export const TableContent = <
  T,
  FormAddValues extends Record<string, any>,
  FormEditValues extends Record<string, any>
>(
  props: React.PropsWithChildren<
    TableContentProps<T, FormAddValues, FormEditValues>
  >
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
          <CustomizedTableRow<T, FormAddValues, FormEditValues>
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
