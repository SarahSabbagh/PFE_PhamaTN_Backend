import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const useAccessToken = () => {
  return useSelector((state: RootState) => state.auth.isAuthenticated);
};
