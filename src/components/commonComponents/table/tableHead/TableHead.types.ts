export interface ITableHead {
  label: string;
  accessor: string;
  type?: string;
  sortable?: boolean;
}
export interface CustomizedTableHeadProps {
  columns: ITableHead[];
}
