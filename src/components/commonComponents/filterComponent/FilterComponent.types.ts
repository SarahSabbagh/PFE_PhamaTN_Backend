import { IFilterRequest } from "../../../redux/api/types/IResponseRequest";

export interface FilterProps {
  recievedFilterData: (data: IFilterRequest) => void;
}
