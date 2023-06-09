import {
  IActions,
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
  expand: boolean;
}
export interface ExpandCellsProps {
  handleExpand: () => void;
  expand: boolean;
}
