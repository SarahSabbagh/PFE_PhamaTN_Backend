import {
  IDeleteAction,
  IEditAction,
} from "../../tableFactory/TableFactory.types";

export interface TableCellsProps {
  element?: string | number | boolean;
  accessor: string;
  title: string;
  item?: any;
  editAction?: IEditAction;
  deleteAction?: IDeleteAction;
  handleActivationMode?: (id: number) => void;
  handleUpdateUserStatus?: (id: number, status: number) => void;
  id: number;
}
export interface ExpandCellsProps {
  handleExpand: () => void;
  expand: boolean;
}
