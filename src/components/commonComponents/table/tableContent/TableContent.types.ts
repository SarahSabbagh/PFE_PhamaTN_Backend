import { IActions, IhandleModal } from "../tableFactory/TableFactory.types";
import { ITableHead } from "../tableHead/TableHead.types";

export interface TableContentProps<
  T,
  FormAddValues extends Record<string, any>,
  FormEditValues extends Record<string, any>
> {
  data: T;
  handleModal: IhandleModal;
  columns: ITableHead[];
  actions: IActions<FormAddValues, FormEditValues>;
  handleActivationMode?: (id: number) => void;
  handleUpdateUserStatus?: (id: number, status: number) => void;
}
