import { IUserFilterRequest } from "../../../../redux/api/types/IResponseRequest";
import { ITableHead } from "../tableHead/TableHead.types";
export interface IActions {
  edit?: boolean;
  delete?: boolean;
  handleDelete?: (id: number) => void;
}
export interface IPagination {
  edit?: boolean;
  delete?: boolean;
  handleDelete?: (id: number) => void;
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
  recievedFilterData: (data: IUserFilterRequest) => void;
  handleActivationMode?: (id: number) => void;
  handleUpdateUserStatus?: (id: number, status: number) => void;
}
