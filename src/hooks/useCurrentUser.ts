import { useDispatch, useSelector } from "react-redux";
import { IUser } from "../redux/api/types/IUser";
import { RootState } from "../redux/store";
import { useGetUserQuery } from "../redux/api/user/userApi";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import React from "react";
import { setUser } from "../redux/features/userSlice";

export const useCurrentUser = () => {
  const dispatch = useDispatch();
  const user: IUser = useSelector((state: RootState) => state.user.user!);
  const { data, isSuccess: isSuccessUser } = useGetUserQuery(user && skipToken);
  React.useEffect(() => {
    if (isSuccessUser) {
      dispatch(setUser(data));
    }
  }, [data]);
  const userId = user?.id;
  const currentRole = user?.role;
  return { currentRole, user, userId };
};
