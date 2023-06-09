import { IActions, IhandleModal } from "../tableFactory/TableFactory.types";
import { ITableHead } from "../tableHead/TableHead.types";

export interface TableContentProps<T> {
  data: T;
  title: string;
  handleModal?: IhandleModal;
  columns: ITableHead[];
  actions?: IActions;
  nestedAction?: IActions;
  handleActivationMode?: (id: number) => void;
  handleUpdateUserStatus?: (id: number, status: number) => void;
}
