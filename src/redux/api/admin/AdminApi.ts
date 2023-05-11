import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "../types/IUser";
import { prepareHeaders } from "../../../core/utils/rtk.config";
import { endpoints } from "../../../core/constants/endpoints";
import {
  IFilterRequest,
  IFilterResponse,
  IResponse,
} from "../types/IResponseRequest";

const BASE_URL = process.env.REACT_APP_SERVER_ENDPOINT as string;

export const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
    prepareHeaders: prepareHeaders,
  }),
  keepUnusedDataFor: 0,
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    userFilter: builder.query<IFilterResponse<IUser[]>, IFilterRequest>({
      query(request) {
        return {
          url: endpoints.ADMIN + endpoints.USER_FILTER,
          params: request,
        };
      },
      providesTags: ["Users"],
    }),
    userActivation: builder.mutation<IResponse, number>({
      query(id) {
        return {
          url: endpoints.ADMIN + endpoints.USER_ACTIVATION + id,
          method: "PUT",
        };
      },
      invalidatesTags: ["Users"],
    }),

    updateUserStatus: builder.mutation<
      IResponse,
      { id: number; status: number }
    >({
      query({ id, status }) {
        return {
          url:
            endpoints.ADMIN + endpoints.UPDATE_USER_STATUS + `${id}/${status}`,
          method: "PUT",
        };
      },
      invalidatesTags: ["Users"],
    }),
    deleteUser: builder.mutation<IResponse, number>({
      query(id) {
        return {
          url: endpoints.USERS + "/" + id,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Users"],
    }),
  }),
});

export const {
  useUserFilterQuery,
  useUpdateUserStatusMutation,
  useUserActivationMutation,
  useDeleteUserMutation,
} = adminApi;
