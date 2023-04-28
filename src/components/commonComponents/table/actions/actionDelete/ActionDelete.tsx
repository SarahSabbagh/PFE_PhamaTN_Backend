import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { ActionDeleteProps } from "./ActionDelete.types";
import { Grid, Typography } from "@mui/material";

export const ActionDelete: React.FC<ActionDeleteProps> = (props) => {
  const { open, handleClose } = props;

  return (
    <Grid>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <Typography variant="h3" color="error">
            {"Delete user"}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {"Are you sure  want to delete this user?"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{ boxShadow: "none", color: "grey" }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            color="error"
            variant="contained"
            sx={{ boxShadow: "none" }}
            onClick={handleClose}
            autoFocus
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};
