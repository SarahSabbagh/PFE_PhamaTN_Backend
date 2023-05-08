import * as React from "react";
import { DialogActions, DialogActionsProps, styled } from "@mui/material";

export const StyledDialogActions = styled(DialogActions)<DialogActionsProps>(
  () => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  })
);
