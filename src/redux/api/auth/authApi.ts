import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../configuredURL";
import { endpoints } from "../../../core/constants/endpoints";
import { prepareHeaders } from "../../../core/utils/rtk.config";
import { ILoginRequest } from "../../../pages/Login";
import { ILoginResponse, IRegisterRequest, IUser } from "../types/IUser";
import { setUser } from "../../features/userSlice";
import { setAccessToken } from "../../features/authSlice";

const headers = { Accept: "application/json" };
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
    prepareHeaders: prepareHeaders,
  }),
  endpoints: (builder) => ({
    login: builder.mutation<ILoginResponse, ILoginRequest>({
      query(loginRequest) {
        return {
          url: endpoints.SIGN_IN,
          method: "POST",
          body: loginRequest,
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data.user));
          dispatch(setAccessToken(data.access_token));
        } catch (error) {
          /* empty */
        }
      },
    }),
    register: builder.mutation({
      query(registerRequest: IRegisterRequest) {
        return {
          url: "/api/auth/register",
          headers: headers,
          method: "POST",
          body: registerRequest,
        };
      },
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: endpoints.LOGOUT,
        method: "POST",
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useLogoutMutation } =
  authApi;
