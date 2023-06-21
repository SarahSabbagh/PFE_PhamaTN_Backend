import { endpoints } from "./../../../core/constants/endpoints";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUpdateUser, IUser } from "../types/IUser";
import { prepareHeaders } from "../../../core/utils/rtk.config";
import { IResponse } from "../types/IResponseRequest";

const BASE_URL = process.env.REACT_APP_SERVER_ENDPOINT as string;

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
    prepareHeaders: prepareHeaders,
  }),
  tagTypes: ["user", "users"],
  endpoints: (builder) => ({
    getUser: builder.query<IUser, void>({
      query() {
        return {
          url: endpoints.USER,
        };
      },
      providesTags: ["user"],
    }),
    users: builder.query<IUser[], void>({
      query() {
        return {
          url: endpoints.USERS,
        };
      },
      providesTags: ["users"],
      transformResponse: (response: { data: IUser[] }) => response.data,
    }),
    deleteUser: builder.mutation<IResponse, number>({
      query(id) {
        return {
          url: endpoints.USERS + "/" + id,
          method: "DELETE",
        };
      },
      invalidatesTags: ["users"],
    }),
    showUser: builder.query<IUser, number>({
      query: (id) => ({
        url: endpoints.USERS + "/" + id,
      }),
    }),
    updateUser: builder.mutation<IUser, IUpdateUser>({
      query({ id, ...rest }) {
        const formData = new FormData();
        rest.name && formData.append("name", rest.name);
        rest.password && formData.append("password", rest.password);
        rest.pharmacyFirstName &&
          formData.append("pharmacyFirstName", rest.pharmacyFirstName);
        rest.pharmacyLastName &&
          formData.append("pharmacyLastName", rest.pharmacyLastName);
        rest.image && formData.append("image", rest.image[0]);
        rest.fax && formData.append("fax", rest.fax);
        rest.phone && formData.append("phone", rest.phone);
        return {
          url: endpoints.USERS + "/" + id,
          method: "POST",
          body: formData,
        };
      },
      invalidatesTags: ["user", "users"],
    }),
  }),
});
export const {
  useUsersQuery,
  useGetUserQuery,
  useShowUserQuery,
  useDeleteUserMutation,
  useUpdateUserMutation,
} = userApi;
