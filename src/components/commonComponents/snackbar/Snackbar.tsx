import {
  Alert,
  AlertProps,
  AlertTitle,
  Snackbar,
  SnackbarProps,
} from "@mui/material";
import * as React from "react";
import { AlertStyle } from "./Snackbar..style";
import { CustomizedAlertProps } from "./Snackbar.types";

export const CustomizedSnackbars: React.FC<
  SnackbarProps & AlertProps & CustomizedAlertProps
> = (props) => {
  const { open, severity, message } = props;

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <AlertStyle severity={severity}>{message}</AlertStyle>
    </Snackbar>
  );
};
