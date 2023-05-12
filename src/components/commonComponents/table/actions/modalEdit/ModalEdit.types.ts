import * as React from "react";

export interface ModalEditProps {
  id: number;
  item: any;
  title: string;
  open: boolean;
  formType: string;
  handleClose: () => void;
}
