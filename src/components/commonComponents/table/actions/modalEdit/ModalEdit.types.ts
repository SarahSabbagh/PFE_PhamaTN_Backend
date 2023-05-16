import * as React from "react";
import { IEditAction } from "../../tableFactory/TableFactory.types";

export interface ModalEditProps<FormEditValues extends Record<string, any>> {
  id: number;
  item: any;
  editAction: IEditAction<FormEditValues>;
  open: boolean;
  formType: string;
  handleClose: () => void;
}
