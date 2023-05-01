import { number } from "zod";
import { status } from "./../../../core/constants/status";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "../types/IUser";
import { prepareHeaders } from "../../../core/utils/rtk.config";
import { endpoints } from "../../../core/constants/endpoints";
import { IFilterResponse, IResponse, IUserFilterRequest } from "../types/IResponseRequest";

const BASE_URL = process.env.REACT_APP_SERVER_ENDPOINT as string;

export const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}` + endpoints.ADMIN,
    prepareHeaders: prepareHeaders,
  }),
  keepUnusedDataFor: 0,
  tagTypes: ["Admin"],
  endpoints: (builder) => ({
    userFilter: builder.query<IFilterResponse<IUser[]>, IUserFilterRequest>({
      query(request) {
        return {
          url: endpoints.USER_FILTER,
          params: request,
        };
      },
    }),
    userActivation: builder.mutation<IResponse, number>({
      query(id) {
        return {
          url: endpoints.USER_ACTIVATION + id,
          method: "PUT",
        };
      },
    }),

    updateUserStatus: builder.mutation<
      IResponse,
      { id: number; status: number }
    >({
      query({ id, status }) {
        return {
          url: endpoints.UPDATE_USER_STATUS + `${id}/${status}`,
          method: "PUT",
        };
      },
    }),
  }),
});
export const {
  useUserFilterQuery,
  useUpdateUserStatusMutation,
  useUserActivationMutation,
} = adminApi;
