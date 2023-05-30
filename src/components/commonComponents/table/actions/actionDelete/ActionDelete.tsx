import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { ActionDeleteProps } from "./ActionDelete.types";
import { Grid } from "@mui/material";
import { CancelButton, DeleteButton } from "./ActionDelete.style";
import { StyledDialogActions } from "../StyledDialogActions.style";
import { useTranslation } from "react-i18next";

export const ActionDelete: React.FC<ActionDeleteProps> = (props) => {
  const { open, handleClose, handleDelete, itemName } = props;
  const { t } = useTranslation();

  return (
    <Grid>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle
          color="error"
          variant="h3"
          align="center"
          id="alert-dialog-title"
        >
          {t("label.DELETE")}
        </DialogTitle>
        <DialogContent>
          <DialogContentText align="center" id="alert-dialog-description">
            {t("label.MESSAGE_USER_DELETE")} <strong>{itemName}</strong> ?
          </DialogContentText>
        </DialogContent>
        <StyledDialogActions>
          <CancelButton onClick={handleClose}>{t("label.CANCEL")}</CancelButton>
          <DeleteButton onClick={handleDelete}>
            {t("label.DELETE")}
          </DeleteButton>
        </StyledDialogActions>
      </Dialog>
    </Grid>
  );
};
