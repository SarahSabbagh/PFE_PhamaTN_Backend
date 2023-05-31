import { useEffect, useState } from "react";
import { globalVariables } from "../core/constants/globalVariables";
import { StatusCode } from "../core/constants/httpStatusCode";
import { useGetUserQuery } from "../redux/api/user/userApi";
import { SerializedError } from "@reduxjs/toolkit/dist/createAsyncThunk";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query/fetchBaseQuery";
import { useNavigate } from "react-router-dom";
import { paths } from "../core/constants/path";

export const useAccessToken = (): boolean => {
  const [error, setError] = useState<
    FetchBaseQueryError | SerializedError | null
  >(null);
  // const user: IUser = useSelector((state: RootState) => state.user.user!);

  const { isError, error: queryError } = useGetUserQuery();
  const navigate = useNavigate();

  useEffect(() => {
    setError(queryError || null);
    if (
      isError &&
      error &&
      "status" in error &&
      error.status === StatusCode.HTTP_UNAUTHORIZED
    ) {
      localStorage.clear();
      navigate(paths.LOGIN, { replace: true });
    }
  }, [isError]);

  return localStorage.getItem(globalVariables.TOKEN) !== null;
};
