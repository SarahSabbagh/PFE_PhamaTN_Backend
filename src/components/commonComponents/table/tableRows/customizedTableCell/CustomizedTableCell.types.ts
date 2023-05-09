import { IActions } from "../../tableFactory/TableFactory.types";

export interface TableCellsProps<FormAddValues extends Record<string, any>> {
  element?: string | number | boolean;
  accessor: string;
  actions?: IActions<FormAddValues>;
  handleActivationMode?: (id: number) => void;
  handleUpdateUserStatus?: (id: number, status: number) => void;
  id: number;
}
