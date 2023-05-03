import { IUserFilterRequest } from "../../../../redux/api/types/IResponseRequest";
import { ITableHead } from "../tableHead/TableHead.types";

export interface IActions {
  filter?: boolean;
  add?: boolean;
  edit?: boolean;
  formType?: string;
  delete?: boolean;
  handleDelete?: (id: number) => void;
  recievedFilterData?: (data: IUserFilterRequest) => void;
}

export interface TableFactoryProps<T> {
  data: T | undefined;
  handleQueryChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
  onRequestSort?: (event: React.MouseEvent<unknown>, newSortBy: string) => void;
  sortOrder?: "desc" | "asc";
  sortBy?: string;
  columns: ITableHead[];
  actions: IActions;
  isLoading: boolean;
  handleActivationMode?: (id: number) => void;
  handleUpdateUserStatus?: (id: number, status: number) => void;
}
