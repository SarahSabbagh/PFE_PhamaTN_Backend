import { useEffect } from "react";
import { globalVariables } from "../core/constants/globalVariables";
import { StatusCode } from "../core/constants/httpStatusCode";
import { useGetUserQuery } from "../redux/api/user/userApi";
import { skipToken } from "@reduxjs/toolkit/dist/query";

export const useAccessToken = (): boolean => {
  const token = localStorage.getItem(globalVariables.TOKEN);
  const { error } = useGetUserQuery(token === null ? skipToken : undefined);
  useEffect(() => {
    if (
      error &&
      "status" in error &&
      error?.status === StatusCode.HTTP_UNAUTHORIZED
    ) {
      localStorage.clear();
    }
  }, [error]);
  return localStorage.getItem(globalVariables.TOKEN) !== null;
};
