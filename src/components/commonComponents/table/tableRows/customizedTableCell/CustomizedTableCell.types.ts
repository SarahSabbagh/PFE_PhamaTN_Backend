import {
  IDeleteAction,
  IEditAction,
} from "../../tableFactory/TableFactory.types";

export interface TableCellsProps<FormEditValues extends Record<string, any>> {
  element?: string | number | boolean;
  accessor: string;
  item?: FormEditValues;
  editAction?: IEditAction<FormEditValues>;
  deleteAction?: IDeleteAction;
  handleActivationMode?: (id: number) => void;
  handleUpdateUserStatus?: (id: number, status: number) => void;
  id: number;
}
export interface StyledCellProps {
  headColumn?: boolean;
}
