import * as React from "react";
import TableCell from "@mui/material/TableCell";
import UnpublishedOutlinedIcon from "@mui/icons-material/UnpublishedOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import { IconButton, Switch } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeOutlinedIcon from "@mui/icons-material/ModeOutlined";
import { IActions } from "../../tableFactory/TableFactory.types";
import { ActionDelete } from "../../actions/actionDelete/ActionDelete";
import { EditModal } from "../../actions/actionEdit/ActionEdit";
import { ActionChangeStatus } from "../../actions/actionChangeStatus/ActionChangeStatus";
import { ActionActivation } from "../../actions/actionActivation/ActionActivation";
import { useUserActivationMutation } from "../../../../../redux/api/admin/AdminApi";

export interface TableCellsProps {
  element?: string | number | boolean;
  accessor: string;
  actions?: IActions;
  id: number;
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
  const { element, id } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const [userActivation] = useUserActivationMutation();

  const handleActive = () => {
    setOpen(false);
    userActivation({ id: id }).unwrap();
  };
  const handleclose = () => {
    setOpen(false);
  };
  return (
    <TableCell align="center">
      <Switch
        defaultChecked={Boolean(element)}
        color="success"
        onChange={handleClickOpen}
      />
      <ActionActivation
        id={id}
        open={open}
        handleClickOpen={handleClickOpen}
        handleActivation={handleActive}
        handleClose={handleclose}
      />
    </TableCell>
  );
};
export const ActionsCell: React.FC<TableCellsProps> = (props) => {
  const { actions, id } = props;
  const [openDelete, setOpenDelete] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);

  const handleClickOpenDelete = () => {
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);

  return actions ? (
    <TableCell align="center">
      {actions.delete && (
        <>
          <IconButton onClick={handleClickOpenDelete}>
            <DeleteOutlineOutlinedIcon color="error" />
          </IconButton>
          <ActionDelete
            id={id}
            open={openDelete}
            handleClickOpen={handleClickOpenDelete}
            handleClose={handleCloseDelete}
          />
        </>
      )}
      {actions.edit && (
        <>
          <IconButton onClick={handleOpenEdit}>
            <ModeOutlinedIcon />
          </IconButton>
          <EditModal
            open={openEdit}
            handleOpen={handleOpenEdit}
            handleClose={handleCloseEdit}
          />
        </>
      )}
    </TableCell>
  ) : null;
};
export const StatusCell: React.FC<TableCellsProps> = (props) => {
  const { element, id } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <TableCell align="center">
      <IconButton onClick={handleClickOpen}>
        {element === 2 ? (
          <TaskAltOutlinedIcon color="success" />
        ) : element === 1 ? (
          <PendingOutlinedIcon />
        ) : (
          <UnpublishedOutlinedIcon color="error" />
        )}
      </IconButton>
      <ActionChangeStatus
        id={id}
        open={open}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
      />
    </TableCell>
  );
};
