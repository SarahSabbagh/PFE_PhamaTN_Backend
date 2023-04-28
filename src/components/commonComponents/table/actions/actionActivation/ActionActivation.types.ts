import * as React from "react";

export interface ActionActivationProps {
  open: boolean;
  handleActivation: () => any;
  handleClose: () => void;
  handleClickOpen: () => void;
  id: number;
}
