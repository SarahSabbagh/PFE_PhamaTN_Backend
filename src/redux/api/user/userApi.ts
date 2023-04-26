import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "../types/IUser";
import { prepareHeaders } from "../../../core/utils/rtk.config";

const BASE_URL = process.env.REACT_APP_SERVER_ENDPOINT as string;

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
    prepareHeaders: prepareHeaders,
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getMe: builder.query<IUser, void>({
      query() {
        return {
          url: "/api/user",
        };
      },
    }),
    users: builder.query<IUser[], void>({
      query() {
        return {
          url: "/api/users",
        };
      },
      transformResponse: (response: { data: IUser[] }) => response.data,
    }),
    showUser: builder.query<IUser, number>({
      query: (id) => ({
        url: `/api/users/${id}`,
      }),
    }),
    updateUser: builder.mutation<IUser, number>({
      query(id) {
        return {
          url: `/api/users/${id}`,
          method: "PUT",
        };
      },
    }),
  }),
});
export const {
  useUsersQuery,
  useGetMeQuery,
  useShowUserQuery,
  useUpdateUserMutation,
} = userApi;
