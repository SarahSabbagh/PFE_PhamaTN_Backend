import * as React from "react";
import TableCell from "@mui/material/TableCell";
import UnpublishedOutlinedIcon from "@mui/icons-material/UnpublishedOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import { Grid, IconButton, Switch } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeOutlinedIcon from "@mui/icons-material/ModeOutlined";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { ActionDelete } from "../../actions/actionDelete/ActionDelete";
import { EditModal } from "../../actions/modalEdit/ModalEdit";
import { ActionChangeStatus } from "../../actions/actionChangeStatus/ActionChangeStatus";
import { ActionActivation } from "../../actions/actionActivation/ActionActivation";
import { TableCellsProps } from "./CustomizedTableCell.types";
import { StyledTableCell } from "./CustomizedTableCell.style";
import { DetailsModal } from "../../actions/detailsModal/DetailsModal";

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
  const { detailsAction, editAction, deleteAction, id, item, title } = props;
  const [openDelete, setOpenDelete] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openDetails, setOpenDetails] = React.useState(false);

  const handleClickOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);
  const handleClickOpenDetails = () => setOpenDetails(true);

  const handleDelete = () => {
    setOpenDelete(false);
    deleteAction?.handleDelete && deleteAction.handleDelete(id);
  };

  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);
  const handleCloseDetails = () => setOpenDetails(false);
  return (
    <StyledTableCell align="center">
      <Grid display="flex" justifyContent="center">
        {detailsAction && (
          <>
            <IconButton onClick={handleClickOpenDetails}>
              <DoubleArrowIcon color="primary" />
            </IconButton>
            <DetailsModal
              item={item}
              id={id}
              title={title}
              formType={detailsAction?.detailsFormType ?? ""}
              open={openDetails}
              handleClose={handleCloseDetails}
            />
          </>
        )}
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
