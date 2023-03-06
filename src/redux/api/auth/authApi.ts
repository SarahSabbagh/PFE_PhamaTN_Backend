import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { BASE_URL } from "../../../configutre_URL";
import { SIGN_IN } from "../../../core/constants/endpoints";
import { IUser, LoginRequest } from "../types/IUser";

export interface userState {
  user: IUser | null;
}
const initialState: userState = {
  user: null,
};

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8000/api/", //`${BASE_URL}`,
  }),
  endpoints: (builder) => ({
    Login: builder.mutation({
      query({ LoginRequest }) {
        return {
          url: "login", //SIGN_IN,
          method: "POST",
          body: LoginRequest,
          //credentials: "include",
        };
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
