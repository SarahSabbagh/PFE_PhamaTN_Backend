import * as React from "react";
import TableCell from "@mui/material/TableCell";
import UnpublishedOutlinedIcon from "@mui/icons-material/UnpublishedOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import { IconButton, Switch } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeOutlinedIcon from "@mui/icons-material/ModeOutlined";
import { CustomizedTableRowProps } from "../CustomizedTableRow.types";
import { IActions } from "../../tableFactory/TableFactory.types";

export interface TableCellsProps {
  element?: string | number | boolean;
  accessor: string;
  actions?: IActions;
}

export const StandardCell: React.FC<TableCellsProps> = (props) => {
  const { element, accessor } = props;
  const capitalizeText = (text: string): string => {
    return text && text[0].toUpperCase() + text.slice(1);
  };
  return (
    <TableCell align="center">
      {(typeof element === "string" &&
        accessor !== "email" &&
        capitalizeText(element)) ||
        element}
    </TableCell>
  );
};
export const ActivationCell: React.FC<TableCellsProps> = (props) => {
  const { element } = props;
  return (
    <TableCell align="center">
      <Switch
        defaultChecked={Boolean(element)}
        color="success"
        // onChange={handleChange}
      />
    </TableCell>
  );
};
export const ActionsCell: React.FC<TableCellsProps> = (props) => {
  const { actions } = props;
  return actions ? (
    <TableCell align="center">
      {actions.delete && (
        <IconButton>
          <DeleteOutlineOutlinedIcon color="error" />
        </IconButton>
      )}
      {actions.edit && (
        <IconButton>
          <ModeOutlinedIcon />
        </IconButton>
      )}
    </TableCell>
  ) : null;
};
export const StatusCell: React.FC<TableCellsProps> = (props) => {
  const { element } = props;
  return (
    <TableCell align="center">
      <IconButton>
        {element === 2 ? (
          <TaskAltOutlinedIcon color="success" />
        ) : element === 1 ? (
          <PendingOutlinedIcon />
        ) : (
          <UnpublishedOutlinedIcon color="error" />
        )}
      </IconButton>
    </TableCell>
  );
};
