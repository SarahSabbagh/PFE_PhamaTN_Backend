import { ITableHead } from "../tableHead/TableHead.types";
interface IActions {
  edit: boolean;
  delete: boolean;
}
export interface TableFactoryProps<T> {
  data: T[];
  handleQueryChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
  columns: ITableHead[];
  actions?: IActions;
  isLoading: Boolean;
}
