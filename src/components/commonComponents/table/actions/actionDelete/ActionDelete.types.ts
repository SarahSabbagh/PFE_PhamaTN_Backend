import * as React from "react";

export interface ActionDeleteProps {
  open: boolean;
  handleClickOpen: () => void;
  handleClose: () => void;
  id: number;
}
