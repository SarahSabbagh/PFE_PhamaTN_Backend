import { useSelector } from "react-redux";
import { IUser } from "../redux/api/types/IUser";
import { RootState } from "../redux/store";

export const useCurrentUser = () => {
  const user: IUser = useSelector((state: RootState) => state.user.user!);
  const currentRole = user.role;
  return { currentRole, user };
};
