import { IFilterRequest } from "../../../../redux/api/types/IResponseRequest";

export interface TableToolBarProps {
  handleQueryChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
  filter?: boolean;
  add?: boolean;
  addFormType?: string;
  handleClickOpen: () => void;
  open: boolean;
  recievedFilterData?: (data: IFilterRequest) => void;
}
