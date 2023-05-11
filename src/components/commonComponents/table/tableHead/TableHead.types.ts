import { ISort } from "../tableFactory/TableFactory.types";

export interface ITableHead {
  label: string;
  accessor: string;
  isSticky?: boolean;
  stickyIndex?: number;
  type?: string;
  sortable?: boolean;
}
export interface CustomizedTableHeadProps {
  columns: ITableHead[];
  sort?: ISort;
}
