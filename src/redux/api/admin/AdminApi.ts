import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IFilterUserRequest, IUser } from "../types/IUser";
import { prepareHeaders } from "../../../core/utils/rtk.config";
import { endpoints } from "../../../core/constants/endpoints";
import { IFilterResponse, IResponse } from "../types/IResponseRequest";

const BASE_URL = process.env.REACT_APP_SERVER_ENDPOINT as string;

export const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
    prepareHeaders: prepareHeaders,
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    userFilter: builder.query<IFilterResponse<IUser[]>, IFilterUserRequest>({
      query(request) {
        return {
          url: endpoints.ADMIN + endpoints.USER_FILTER,
          params: request,
        };
      },
      providesTags: ["User"], //(result) =>
      //   result
      //     ? [
      //         ...result.data.map(({ id }) => ({ type: "User" as const, id })),
      //         "User",
      //       ]
      //     : ["User"],
    }),
    userActivation: builder.mutation<IResponse, number>({
      query(id) {
        return {
          url: endpoints.ADMIN + endpoints.USER_ACTIVATION + id,
          method: "PUT",
        };
      },
      invalidatesTags: ["User"],
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
      invalidatesTags: ["User"],
    }),
    deleteUser: builder.mutation<IResponse, number>({
      query(id) {
        return {
          url: endpoints.USERS + "/" + id,
          method: "DELETE",
        };
      },
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useUserFilterQuery,
  useUpdateUserStatusMutation,
  useUserActivationMutation,
  useDeleteUserMutation,
} = adminApi;
