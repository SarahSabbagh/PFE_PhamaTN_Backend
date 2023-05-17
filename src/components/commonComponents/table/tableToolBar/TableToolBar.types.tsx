import {
  IAddAction,
  IFilter,
  IhandleModal,
} from "../tableFactory/TableFactory.types";

export interface TableToolBarProps<FormAddValues extends Record<string, any>> {
  handleQueryChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
  filter?: IFilter;
  add?: IAddAction<FormAddValues>;
  handleModal?: IhandleModal;
}
