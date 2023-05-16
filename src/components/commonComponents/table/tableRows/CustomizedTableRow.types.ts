import { IDeleteAction, IEditAction } from "../tableFactory/TableFactory.types";
import { ITableHead } from "../tableHead/TableHead.types";

export interface CustomizedTableRowProps {
  item: any;
  title: string;
  columns: ITableHead[];
  editAction?: IEditAction;
  deleteAction?: IDeleteAction;
  handleActivationMode?: (id: number) => void;
  handleUpdateUserStatus?: (id: number, status: number) => void;
}
