export interface CustomizedTablePaginationProps<T> {
  count: number;
  rowsPerPage: number;
  page: number;
  rowsPerPageOptions: number[];
  handleChangePage: (event: unknown, newPage: number) => void;
  handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
