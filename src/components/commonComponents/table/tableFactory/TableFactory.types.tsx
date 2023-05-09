import { IFilterRequest } from "../../../../redux/api/types/IResponseRequest";
import { ITableHead } from "../tableHead/TableHead.types";

export interface IActions {
  filter?: boolean;
  add?: boolean;
  addFormType?: string;
  edit?: boolean;
  editFormType?: string;
  delete?: boolean;
  handleDelete?: (id: number) => void;
  recievedFilterData?: (data: IFilterRequest) => void;
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
  open: boolean;
  handleActivationMode?: (id: number) => void;
  handleUpdateUserStatus?: (id: number, status: number) => void;
  handleClickOpen: () => void;
}
