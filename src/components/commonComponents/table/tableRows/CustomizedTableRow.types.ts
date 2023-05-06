import { IActions } from "../tableFactory/TableFactory.types";
import { ITableHead } from "../tableHead/TableHead.types";

export interface CustomizedTableRowProps<T> {
  item: any;
  columns: ITableHead[];
  actions: IActions;
  handleActivationMode?: (id: number) => void;
  handleUpdateUserStatus?: (id: number, status: number) => void;
}
export interface StickyCellProps {
  headColumn?: boolean;
  stickyColumn?: boolean;
  stickyIndex?: number;
}
