import { IFilterUserRequest } from "../../../redux/api/types/IUser";

export interface FilterProps {
  recievedFilterData: (data: IFilterUserRequest) => void;
}
export interface IFilterData {
  role?: number;
  status?: number;
  activationMode?: boolean;
}
export interface Ilabel {
  role?: string;
  status?: string;
  activationMode?: string;
}
