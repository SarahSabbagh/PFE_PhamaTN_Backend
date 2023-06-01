import { IFilterRequest } from "../../../../redux/api/types/IResponseRequest";
import { ITableHead } from "../tableHead/TableHead.types";

export interface IActions {
  filter?: IFilter;
  add?: IAddAction;
  edit?: IEditAction;
  delete?: IDeleteAction;
}

export interface IFilter {
  filter: boolean;
  recievedFilterData: (data: IFilterRequest) => void;
}
export interface IAddAction {
  add: boolean;
  addFormType: string;
}

export interface IEditAction {
  edit: boolean;
  editFormType: string;
}
export interface IDeleteAction {
  delete: boolean;
  handleDelete: (id: number) => void;
}
export interface IhandleModal {
  open: boolean;
  handleClickOpen: () => void;
  handleClose: () => void;
}
export interface ISort {
  onRequestSort?: (event: React.MouseEvent<unknown>, newSortBy: string) => void;
  sortOrder?: "desc" | "asc";
  sortBy?: string;
}

export interface TableFactoryProps<T> {
  data: T | undefined;
  handleQueryChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
  sort?: ISort;
  handleModal?: IhandleModal;
  columns: ITableHead[];
  actions: IActions;
  isLoading: boolean;
  isFetching: boolean;
  handleActivationMode?: (id: number) => void;
  handleUpdateUserStatus?: (id: number, status: number) => void;
  noToolBar?: boolean;
}
