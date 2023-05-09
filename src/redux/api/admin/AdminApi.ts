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
  // keepUnusedDataFor: 60000,
  tagTypes: ["Admin"],
  endpoints: (builder) => ({
    userFilter: builder.query<IFilterResponse<IUser[]>, IFilterRequest>({
      query(request) {
        return {
          url: endpoints.ADMIN + endpoints.USER_FILTER,
          params: request,
        };
      },
      providesTags: ["Admin"],
    }),
    userActivation: builder.mutation<IResponse, number>({
      query(id) {
        return {
          url: endpoints.ADMIN + endpoints.USER_ACTIVATION + id,
          method: "PUT",
        };
      },
      invalidatesTags: ["Admin"],
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
      invalidatesTags: ["Admin"],
    }),
    deleteUser: builder.mutation<IResponse, number>({
      query(id) {
        return {
          url: endpoints.USERS + "/" + id,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Admin"],
    }),
  }),
});
export const {
  useUserFilterQuery,
  useUpdateUserStatusMutation,
  useUserActivationMutation,
  useDeleteUserMutation,
} = adminApi;
