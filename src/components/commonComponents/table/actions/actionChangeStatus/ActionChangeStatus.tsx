import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Grid, IconButton, Typography } from "@mui/material";
import { ActionDeleteProps } from "../actionDelete/ActionDelete.types";
import UnpublishedOutlinedIcon from "@mui/icons-material/UnpublishedOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
export const ActionChangeStatus: React.FC<ActionDeleteProps> = (props) => {
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
          <Typography variant="h3">{"User status "}</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {"Are you sure  want to change user status ?"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <IconButton onClick={handleClose}>
            <TaskAltOutlinedIcon color="success" />
          </IconButton>
          <IconButton
            // variant="contained"
            onClick={handleClose}
          >
            <UnpublishedOutlinedIcon color="error" />
          </IconButton>
          <IconButton onClick={handleClose}>
            <PendingOutlinedIcon />
          </IconButton>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};
