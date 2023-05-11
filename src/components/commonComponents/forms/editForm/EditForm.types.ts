import * as React from "react";
import { IEditAction } from "../../table/tableFactory/TableFactory.types";

export interface FormEditProps<FormEditValues extends Record<string, any>> {
  id: number;
  itemName: string;
  handleClose: () => void;
  editAction: IEditAction<FormEditValues>;
}
