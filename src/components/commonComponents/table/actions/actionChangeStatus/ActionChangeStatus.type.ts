import * as React from "react";

export interface ActionChangeStatusProps {
  open: boolean;
  itemName?: string;
  handleClose: () => void;
  handleStatus: (status: number) => void;
}
