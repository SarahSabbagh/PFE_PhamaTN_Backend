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
  onRequestSort?: (event: React.MouseEvent<unknown>, newSortBy: string) => void;
  sortOrder?: "desc" | "asc";
  sortBy?: string;
}
