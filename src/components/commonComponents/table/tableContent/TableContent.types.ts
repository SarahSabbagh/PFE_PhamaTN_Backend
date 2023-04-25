import { ITableHead } from "../tableHead/TableHead.types";

export interface TableContentProps<T> {
  data: T[];
  columns: ITableHead[];
}
