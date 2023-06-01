import {
  IAddAction,
  IFilter,
  IhandleModal,
} from "../tableFactory/TableFactory.types";

export interface TableToolBarProps {
  handleQueryChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
  filter?: IFilter;
  add?: IAddAction;
  handleModal?: IhandleModal;
}
