import * as React from "react";
import TableCell from "@mui/material/TableCell";
import UnpublishedOutlinedIcon from "@mui/icons-material/UnpublishedOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import { IconButton, Switch } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeOutlinedIcon from "@mui/icons-material/ModeOutlined";
import { ActionDelete } from "../../actions/actionDelete/ActionDelete";
import { EditModal } from "../../actions/modalEdit/ModalEdit";
import { ActionChangeStatus } from "../../actions/actionChangeStatus/ActionChangeStatus";
import { ActionActivation } from "../../actions/actionActivation/ActionActivation";
import { TableCellsProps } from "./CustomizedTableCell.types";
import { StyledTableCell } from "./CustomizedTableCell.style";

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
  const { element, id, handleActivationMode } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleActivation = () => {
    setOpen(false);
    handleActivationMode && handleActivationMode(id);
  };
  const handleclose = () => {
    setOpen(false);
  };
  return (
    <StyledTableCell
      //stickyColumn stickyIndex={1}
      align="center"
    >
      <Switch
        defaultChecked={Boolean(element)}
        color="success"
        onChange={handleClickOpen}
      />
      <ActionActivation
        open={open}
        handleActivation={handleActivation}
        handleClose={handleclose}
      />
    </StyledTableCell>
  );
};

export const ActionsCell: React.FC<TableCellsProps> = (props) => {
  const { actions, id } = props;
  const [openDelete, setOpenDelete] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);

  const handleClickOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);
  const handleDelete = () => {
    setOpenDelete(false);
    actions?.handleDelete && actions?.handleDelete(id);
  };

  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);

  return actions ? (
    <StyledTableCell
      sx={{ display: "flex", justifyContent: "center" }}
      //stickyColumn
      align="center"
    >
      {actions.delete && (
        <>
          <IconButton onClick={handleClickOpenDelete}>
            <DeleteOutlineOutlinedIcon color="error" />
          </IconButton>
          <ActionDelete
            open={openDelete}
            handleDelete={handleDelete}
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
            id={id}
            formType={actions.editFormType ?? ""}
            open={openEdit}
            handleClose={handleCloseEdit}
          />
        </>
      )}
    </StyledTableCell>
  ) : null;
};

export const StatusCell: React.FC<TableCellsProps> = (props) => {
  const { element, id, handleUpdateUserStatus } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleStatus = (status: number) => {
    setOpen(false);
    handleUpdateUserStatus && handleUpdateUserStatus(id, status);
  };

  return (
    <StyledTableCell
      //stickyColumn stickyIndex={2}
      align="center"
    >
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
        open={open}
        handleStatus={handleStatus}
        handleClose={handleClose}
      />
    </StyledTableCell>
  );
};
