import * as React from "react";
import {
  Stack,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import { CustomizedTableRowProps } from "./CustomizedTableRow.types";
import {
  StandardCell,
  StatusCell,
  ActionsCell,
  ActivationCell,
} from "./customizedTableCell/CustomizedTableCell";
import { ITableHead } from "../tableHead/TableHead.types";

export const CustomizedTableRow = <
  T,
  FormAddValues extends Record<string, any>,
  FormEditValues extends Record<string, any>
>(
  props: React.PropsWithChildren<
    CustomizedTableRowProps<T, FormAddValues, FormEditValues>
  >
) => {
  const {
    item,
    columns,
    actions,
    handleActivationMode,
    handleUpdateUserStatus,
  } = props;

  return (
    <TableRow>
      {columns.map(
        (col: ITableHead) =>
          (col.accessor === "status" && (
            <StatusCell
              key={col.accessor}
              accessor={col.accessor}
              item={item}
              element={item[col.accessor]}
              id={item.id}
              handleUpdateUserStatus={handleUpdateUserStatus}
            />
          )) ||
          (col.accessor === "active" && (
            <ActivationCell
              key={col.accessor}
              accessor={col.accessor}
              item={item}
              element={item[col.accessor]}
              handleActivationMode={handleActivationMode}
              id={item.id}
            />
          )) ||
          (col.label === "Action" && (
            <ActionsCell
              accessor={col.accessor}
              item={item}
              key={col.accessor}
              id={item.id}
              editAction={actions?.edit}
              deleteAction={actions?.delete}
            />
          )) || (
            <StandardCell
              id={item.id}
              accessor={col.accessor}
              key={col.accessor}
              element={item[col.accessor]}
            />
          )
      )}
    </TableRow>
  );
};

export const EmptyTableRow: React.FC = () => {
  return (
    <TableBody>
      <TableRow>
        <TableCell align="center" colSpan={12}>
          <Stack direction="column" justifyContent="center" alignItems="center">
            <InboxIcon color="disabled" fontSize="large" />
            <Typography>No data </Typography>
          </Stack>
        </TableCell>
      </TableRow>
    </TableBody>
  );
};
