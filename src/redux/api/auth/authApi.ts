import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../configuredURL";
import { endpoints } from "../../../core/constants/endpoints";

import { ILoginRequest, IUser } from "../types/IUser";

export interface userState {
  user: IUser | null;
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
  }),
  endpoints: (builder) => ({
    login: builder.mutation<
      {
        status: string;
        message: string;
        user: IUser;
        access_token: string;
      },
      ILoginRequest
    >({
      query(LoginRequest) {
        console.log(
          `${process.env.REACT_APP_SERVER_ENDPOINT}` + endpoints.SIGN_IN
        );
        console.log(LoginRequest);
        return {
          url: endpoints.SIGN_IN,
          method: "POST",
          body: LoginRequest,
          credentials: "include",
        };
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
