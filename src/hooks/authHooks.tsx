import { globalVariables } from "../core/constants/globalVariables";

export const useAccessToken = (): boolean => {
  return localStorage.getItem(globalVariables.TOKEN) !== null;
};
