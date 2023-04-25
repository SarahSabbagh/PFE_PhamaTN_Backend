import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import UnpublishedOutlinedIcon from "@mui/icons-material/UnpublishedOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import { IconButton, Switch } from "@mui/material";
import { CustomizedTableRowProps } from "./CustomizedTableRow.types";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeOutlinedIcon from "@mui/icons-material/ModeOutlined";
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
