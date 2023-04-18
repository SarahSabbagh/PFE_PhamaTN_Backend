import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { globalVariables } from "../core/constants/globalVariables";

export const useAccessToken = (): boolean => {
  return localStorage.getItem(globalVariables.TOKEN) ? true : false;
};
