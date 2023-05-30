import { useEffect } from "react";
import { globalVariables } from "../core/constants/globalVariables";
import { useNavigate } from "react-router-dom";
import { paths } from "../core/constants/path";
import { IUser } from "../redux/api/types/IUser";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

export const useAccessToken = (): boolean => {
  const navigate = useNavigate();
  const user: IUser | null = useSelector((state: RootState) => state.user.user);
  useEffect(() => {
    if (!user) {
      localStorage.clear();
      navigate(paths.LOGIN, { replace: true });
    }
  }, [user]);

  return localStorage.getItem(globalVariables.TOKEN) !== null;
};
