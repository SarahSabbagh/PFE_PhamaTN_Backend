import { IFilterUserRequest } from "../../../redux/api/types/IUser";

export interface FilterProps {
  recievedFilterData: (data: IFilterUserRequest) => void;
}
