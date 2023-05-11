import { DeepPartial, Resolver, SubmitHandler } from "react-hook-form";
import { IFilterRequest } from "../../../../redux/api/types/IResponseRequest";
import { ITableHead } from "../tableHead/TableHead.types";

export interface IActions<
  FormValues extends Record<string, any>,
  FormEditValues extends Record<string, any>
> {
  filter?: IFilter;
  add?: IAddAction<FormValues>;
  edit?: IEditAction<FormEditValues>;
  delete?: IDeleteAction;
}

export interface IFilter {
  filter: boolean;
  recievedFilterData: (data: IFilterRequest) => void;
}
export interface IAddAction<FormAddValues extends Record<string, any>> {
  add: boolean;
  addFormType: string;
  titleAddForm?: string;
  defaultAddValues?: DeepPartial<FormAddValues>;
  addResolver?: Resolver<FormAddValues>;
  onSubmitAdd?: SubmitHandler<FormAddValues>;
  isLoadingAddForm?: boolean;
  isSuccessAddForm?: boolean;
}

export interface IEditAction<FormEditValues extends Record<string, any>> {
  edit: boolean;
  defaultValues?: FormEditValues;
  editFormType: string;
  editResolver?: Resolver<FormEditValues>;
  onSubmitEdit?: SubmitHandler<FormEditValues>;
  isLoadingEditForm?: boolean;
  isSuccessEditForm?: boolean;
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

export interface TableFactoryProps<
  T,
  FormAddValues extends Record<string, any>,
  FormEditValues extends Record<string, any>
> {
  data: T | undefined;
  handleQueryChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
  sort?: ISort;
  handleModal: IhandleModal;
  columns: ITableHead[];
  actions: IActions<FormAddValues, FormEditValues>;
  isLoading: boolean;
  isFetching: boolean;
  handleActivationMode?: (id: number) => void;
  handleUpdateUserStatus?: (id: number, status: number) => void;
}
