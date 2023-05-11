import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Grid, IconButton, Typography } from "@mui/material";
import UnpublishedOutlinedIcon from "@mui/icons-material/UnpublishedOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import { ActionChangeStatusProps } from "./ActionChangeStatus.type";
import { status } from "../../../../../core/constants/status";
import { StyledDialogActions } from "../StyledDialogActions.style";

export const ActionChangeStatus: React.FC<ActionChangeStatusProps> = (
  props
) => {
  const { open, handleClose, handleStatus, itemName } = props;

  return (
    <Grid>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle align="center" id="alert-dialog-title">
          <Typography variant="h3">{"User status "}</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText align="center" id="alert-dialog-description">
            Are you sure want to change <strong>{itemName}</strong> status ?
          </DialogContentText>
        </DialogContent>
        <StyledDialogActions>
          <IconButton onClick={() => handleStatus(status.ACCEPTED)}>
            <TaskAltOutlinedIcon color="success" />
          </IconButton>
          <IconButton onClick={() => handleStatus(status.REFUSED)}>
            <UnpublishedOutlinedIcon color="error" />
          </IconButton>
          <IconButton onClick={() => handleStatus(status.PENDING)}>
            <PendingOutlinedIcon />
          </IconButton>
        </StyledDialogActions>
      </Dialog>
    </Grid>
  );
};
