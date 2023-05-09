import * as React from "react";

export interface ModalEditProps {
  id: number;
  itemName: string;
  open: boolean;
  formType: string;
  handleClose: () => void;
}
