import { ITableHead } from "../tableHead/TableHead.types";

export interface CustomizedTableRowProps<T> {
  item: any;
  columns: ITableHead[];
}
