import * as React from "react";
import { Stack, TableCell, TableRow, Typography } from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import { CustomizedTableRowProps } from "./CustomizedTableRow.types";

import {
  StandardCell,
  StatusCell,
  ActionsCell,
  ActivationCell,
} from "./customizedTableCell/CustomizedTableCell";
export const CustomizedTableRow = <T,>(
  props: React.PropsWithChildren<CustomizedTableRowProps<T>>
) => {
  const { item, columns, actions } = props;

  return (
    <TableRow>
      {columns.map(
        (col: any) =>
          (col.accessor === "status" && (
            <StatusCell
              key={col.accessor}
              accessor={col.accessor}
              element={item[col.accessor]}
            />
          )) ||
          (col.accessor === "active" && (
            <ActivationCell
              key={col.accessor}
              accessor={col.accessor}
              element={item[col.accessor]}
            />
          )) ||
          (col.label === "Action" && (
            <ActionsCell
              accessor={col.accessor}
              key={col.accessor}
              actions={actions}
            />
          )) || (
            <StandardCell
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
    <TableRow>
      <TableCell align="center" colSpan={12}>
        <Stack direction="column" justifyContent="center" alignItems="center">
          <InboxIcon color="disabled" fontSize="large" />
          <Typography>No data </Typography>
        </Stack>
      </TableCell>
    </TableRow>
  );
};
