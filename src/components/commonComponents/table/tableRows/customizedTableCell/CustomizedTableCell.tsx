import * as React from "react";
import TableCell from "@mui/material/TableCell";
import UnpublishedOutlinedIcon from "@mui/icons-material/UnpublishedOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import { Grid, IconButton, Switch, TableRow } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeOutlinedIcon from "@mui/icons-material/ModeOutlined";
import { ActionDelete } from "../../actions/actionDelete/ActionDelete";
import { EditModal } from "../../actions/modalEdit/ModalEdit";
import { ActionChangeStatus } from "../../actions/actionChangeStatus/ActionChangeStatus";
import { ActionActivation } from "../../actions/actionActivation/ActionActivation";
import { ExpandCellsProps, TableCellsProps } from "./CustomizedTableCell.types";
import { StyledTableCell } from "./CustomizedTableCell.style";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { capitalizeText } from "../../../../../core/utils/CapitalizeText";

export const StandardCell: React.FC<TableCellsProps> = (props) => {
  const { element, accessor } = props;

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
    handleActivationMode && handleActivationMode(id);
    setOpen(false);
  };
  const handleclose = () => {
    setOpen(false);
  };
  return (
    <StyledTableCell align="center">
      <Switch
        checked={Boolean(element)}
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
  const { editAction, deleteAction, id, item, title } = props;
  const [openDelete, setOpenDelete] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);

  const handleClickOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);

  const handleDelete = () => {
    setOpenDelete(false);
    deleteAction?.handleDelete && deleteAction.handleDelete(id);
  };

  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);
  return (
    <StyledTableCell align="center">
      <Grid display="flex" justifyContent="center">
        {deleteAction && (
          <>
            <IconButton onClick={handleClickOpenDelete}>
              <DeleteOutlineOutlinedIcon color="error" />
            </IconButton>
            <ActionDelete
              itemName={item?.name}
              open={openDelete}
              handleDelete={handleDelete}
              handleClose={handleCloseDelete}
            />
          </>
        )}
        {editAction && (
          <>
            <IconButton onClick={handleOpenEdit}>
              <ModeOutlinedIcon />
            </IconButton>
            <EditModal
              item={item}
              id={id}
              title={title}
              formType={editAction?.editFormType ?? ""}
              open={openEdit}
              handleClose={handleCloseEdit}
            />
          </>
        )}
      </Grid>
    </StyledTableCell>
  );
};

export const ExpandCell: React.FC<ExpandCellsProps> = (props) => {
  const { handleExpand, expand } = props;

  return (
    <StyledTableCell align="center">
      <Grid display="flex" justifyContent="center">
        <IconButton onClick={handleExpand}>
          {expand ? <ArrowDropUpIcon color="primary" /> : <ArrowDropDownIcon />}
        </IconButton>
      </Grid>
    </StyledTableCell>
  );
};
export const StatusCell: React.FC<TableCellsProps> = (props) => {
  const { element, id, handleUpdateUserStatus, item } = props;
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
    <StyledTableCell align="center">
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
        itemName={item?.name}
        open={open}
        handleStatus={handleStatus}
        handleClose={handleClose}
      />
    </StyledTableCell>
  );
};
