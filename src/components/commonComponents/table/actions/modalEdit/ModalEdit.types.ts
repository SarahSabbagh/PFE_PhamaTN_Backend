import * as React from "react";

export interface ModalEditProps {
  id: number;
  open: boolean;
  formType: string;
  handleClose: () => void;
}
