import * as React from "react";

export interface ActionChangeStatusProps {
  open: boolean;
  handleClose: () => void;
  handleStatus: (status: number) => void;
}
