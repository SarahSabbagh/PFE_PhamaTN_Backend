import { IActions } from "../tableFactory/TableFactory.types";
import { ITableHead } from "../tableHead/TableHead.types";

export interface CustomizedTableRowProps<
  T,
  FormAddValues extends Record<string, any>
> {
  item: any;
  columns: ITableHead[];
  actions: IActions<FormAddValues>;
  handleActivationMode?: (id: number) => void;
  handleUpdateUserStatus?: (id: number, status: number) => void;
}
export interface StickyCellProps {
  headColumn?: boolean;
  stickyColumn?: boolean;
  stickyIndex?: number;
}
