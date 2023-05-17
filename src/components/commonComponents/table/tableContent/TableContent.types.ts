import { IActions, IhandleModal } from "../tableFactory/TableFactory.types";
import { ITableHead } from "../tableHead/TableHead.types";

export interface TableContentProps<
  T,
  FormAddValues extends Record<string, any>
> {
  data: T;
  title: string;
  handleModal?: IhandleModal;
  columns: ITableHead[];
  actions: IActions<FormAddValues>;
  handleActivationMode?: (id: number) => void;
  handleUpdateUserStatus?: (id: number, status: number) => void;
}
