import { IUserFilterRequest } from "../../../../redux/api/types/IResponseRequest";

export interface TableToolBarProps {
  handleQueryChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
  filter?: boolean;
  add?: boolean;
  recievedFilterData?: (data: IUserFilterRequest) => void;
}
