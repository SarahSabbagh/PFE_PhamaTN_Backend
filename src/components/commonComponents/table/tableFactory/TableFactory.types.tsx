import { ITableHead } from "../tableHead/TableHead.types";
export interface IActions {
  edit?: boolean;
  delete?: boolean;
}
export interface TableFactoryProps<T> {
  data: T[];
  handleQueryChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
  columns: ITableHead[];
  actions: IActions;
  isLoading: boolean;
  page: number;
  rowsPerPageOptions: number[];
  rowsPerPage: number;
  handleChangePage: (event: unknown, newPage: number) => void;
  handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
