import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Grid, Typography } from "@mui/material";
import { ActionActivationProps } from "./ActionActivation.types";
import { CancelButton, ConfirmButton } from "./ActionActivation.style";
import { StyledDialogActions } from "../StyledDialogActions.style";
import { useTranslation } from "react-i18next";

export const ActionActivation: React.FC<ActionActivationProps> = (props) => {
  const { open, handleClose, handleActivation } = props;
  const { t } = useTranslation();

  return (
    <Grid>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle align="center" id="alert-dialog-title">
          <Typography variant="h3">{t("label.USER_ACTIVATION")}</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText align="center" id="alert-dialog-description">
            {t("label.MESSAGE_USER_ACTIVATION")}
          </DialogContentText>
        </DialogContent>
        <StyledDialogActions>
          <CancelButton onClick={handleClose}>{t("label.CANCEL")}</CancelButton>
          <ConfirmButton onClick={handleActivation}>
            {t("label.CONFIRM")}
          </ConfirmButton>
        </StyledDialogActions>
      </Dialog>
    </Grid>
  );
};
