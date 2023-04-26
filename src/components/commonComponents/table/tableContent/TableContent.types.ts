import { IActions } from "../tableFactory/TableFactory.types";
import { ITableHead } from "../tableHead/TableHead.types";

export interface TableContentProps<T> {
  data: T[];
  columns: ITableHead[];
  rowsPerPage: number;
  page: number;
  actions: IActions;
}
