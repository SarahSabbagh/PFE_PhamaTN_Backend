import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { ActionDeleteProps } from "./ActionDelete.types";
import { Grid, Typography } from "@mui/material";
import { CancelButton, DeleteButton } from "./ActionDelete.style";
import { StyledDialogActions } from "../StyledDialogActions.style";

export const ActionDelete: React.FC<ActionDeleteProps> = (props) => {
  const { open, handleClose, handleDelete } = props;

  return (
    <Grid>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle align="center" id="alert-dialog-title">
          <Typography variant="h3" color="error">
            {"Delete user"}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText align="center" id="alert-dialog-description">
            {"Are you sure  want to delete this user?"}
          </DialogContentText>
        </DialogContent>
        <StyledDialogActions>
          <CancelButton onClick={handleClose}>Cancel</CancelButton>
          <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
        </StyledDialogActions>
      </Dialog>
    </Grid>
  );
};
