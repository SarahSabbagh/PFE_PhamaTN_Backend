import * as React from "react";

export interface ActionDeleteProps {
  open: boolean;
  itemName?: string;
  handleDelete: () => void;
  handleClose: () => void;
}
