import { IActions } from "../../tableFactory/TableFactory.types";

export interface TableCellsProps {
  element?: string | number | boolean;
  accessor: string;
  actions?: IActions;
  handleActivationMode?: (id: number) => void;
  handleUpdateUserStatus?: (id: number, status: number) => void;
  id: number;
}
