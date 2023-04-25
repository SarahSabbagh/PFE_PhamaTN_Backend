import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import UnpublishedOutlinedIcon from "@mui/icons-material/UnpublishedOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import { IconButton, Switch } from "@mui/material";
import { CustomizedTableRowProps } from "./CustomizedTableRow.types";

export const CustomizedTableRow = <T,>(
  props: React.PropsWithChildren<CustomizedTableRowProps<T>>
) => {
  const { item, columns } = props;
  return (
    <TableRow>
      {columns.map((col: any) => (
        <TableCell key={col.accessor} align="center">
          {col.accessor !== "status" && col.accessor !== "active" ? (
            item[col.accessor]
          ) : col.accessor === "status" ? (
            <IconButton aria-label="delete">
              {item[col.accessor] === 2 ? (
                <TaskAltOutlinedIcon color="success" />
              ) : item[col.accessor] === 1 ? (
                <PendingOutlinedIcon />
              ) : (
                <UnpublishedOutlinedIcon color="error" />
              )}
            </IconButton>
          ) : (
            col.accessor === "active" && (
              <Switch
                sx={{
                  [".MuiSwitch-switchBase"]: {
                    color: "red",
                  },
                }}
                defaultChecked={item[col.accessor]}
                color="success"
                // onChange={handleChange}
              />
            )
          )}
        </TableCell>
      ))}
    </TableRow>
  );
};
