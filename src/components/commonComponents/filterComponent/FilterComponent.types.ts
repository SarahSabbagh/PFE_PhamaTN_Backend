import { IUserFilterRequest } from "../../../redux/api/types/IResponseRequest";

export interface FilterProps {
  recievedFilterData: (data: IUserFilterRequest) => void;
}
