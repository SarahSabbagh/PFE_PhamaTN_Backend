import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Grid, Typography } from "@mui/material";
import { ActionActivationProps } from "./ActionActivation.types";
import { CancelButton, ConfirmButton } from "./ActionActivation.style";
import { StyledDialogActions } from "../StyledDialogActions.style";

export const ActionActivation: React.FC<ActionActivationProps> = (props) => {
  const { open, handleClose, handleActivation } = props;

  return (
    <Grid>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle align="center" id="alert-dialog-title">
          <Typography variant="h3">User activation </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText align="center" id="alert-dialog-description">
            Are you sure want to change user activation ?
          </DialogContentText>
        </DialogContent>
        <StyledDialogActions>
          <CancelButton onClick={handleClose}>Cancel</CancelButton>
          <ConfirmButton onClick={handleActivation}>Confirm</ConfirmButton>
        </StyledDialogActions>
      </Dialog>
    </Grid>
  );
};
