import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Grid, Typography } from "@mui/material";
import { ActionActivationProps } from "./ActionActivation.types";

export const ActionActivation: React.FC<ActionActivationProps> = (props) => {
  const { open, handleClose, handleActivation, id } = props;

  return (
    <Grid>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <Typography variant="h3">User activation </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure want to change user activation ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            color="error"
            variant="contained"
            sx={{ boxShadow: "none" }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button variant="contained" onClick={handleActivation} autoFocus>
            Comfirm
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};
