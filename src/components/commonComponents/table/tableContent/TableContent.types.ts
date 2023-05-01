import { IActions } from "../tableFactory/TableFactory.types";
import { ITableHead } from "../tableHead/TableHead.types";

export interface TableContentProps<T> {
  data: T;
  columns: ITableHead[];
  actions: IActions;
  handleActivationMode?: (id: number) => void;
  handleUpdateUserStatus?: (id: number, status: number) => void;
}
