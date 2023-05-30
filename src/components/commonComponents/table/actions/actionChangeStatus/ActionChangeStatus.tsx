import * as React from "react";
import Dialog from "@mui/material/Dialog";
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
import { useTranslation } from "react-i18next";

export const ActionChangeStatus: React.FC<ActionChangeStatusProps> = (
  props
) => {
  const { open, handleClose, handleStatus, itemName } = props;
  const { t } = useTranslation();

  return (
    <Grid>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle align="center" id="alert-dialog-title">
          <Typography variant="h3">{t("label.USER_STATUS")}</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText align="center" id="alert-dialog-description">
            {t("label.MESSAGE_CHANGE_STATUS")}
            <strong>{itemName}</strong> ?
          </DialogContentText>
        </DialogContent>
        <StyledDialogActions>
          <IconButton onClick={() => handleStatus(status[2].value)}>
            <TaskAltOutlinedIcon color="success" />
          </IconButton>
          <IconButton onClick={() => handleStatus(status[0].value)}>
            <UnpublishedOutlinedIcon color="error" />
          </IconButton>
          <IconButton onClick={() => handleStatus(status[1].value)}>
            <PendingOutlinedIcon />
          </IconButton>
        </StyledDialogActions>
      </Dialog>
    </Grid>
  );
};
