import { DeepPartial } from "react-hook-form";
import { IActions } from "../tableFactory/TableFactory.types";
import { ITableHead } from "../tableHead/TableHead.types";

export interface CustomizedTableRowProps<
  T,
  FormAddValues extends Record<string, any>,
  FormEditValues extends Record<string, any>
> {
  item: any;
  columns: ITableHead[];
  actions: IActions<FormAddValues, FormEditValues>;
  handleActivationMode?: (id: number) => void;
  handleUpdateUserStatus?: (id: number, status: number) => void;
}
