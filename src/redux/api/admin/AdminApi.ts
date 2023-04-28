import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "../types/IUser";
import { prepareHeaders } from "../../../core/utils/rtk.config";
import { endpoints } from "../../../core/constants/endpoints";
import { IResponse, IUserFilterRequest } from "../types/IResponseRequest";

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
    userFilter: builder.query<IUser[], IUserFilterRequest>({
      query(request) {
        return {
          url: endpoints.USER_FILTER,
          params: request,
        };
      },
      transformResponse: (response: { data: IUser[] }) => response.data,
    }),
    userActivation: builder.mutation<IResponse, { id: number }>({
      query(payload: { id: number }) {
        return {
          url: endpoints.USER_ACTIVATION,
          method: "post",
          body: payload,
        };
      },
    }),

    updateUserStatus: builder.mutation<IResponse, number[]>({
      query(body) {
        return {
          url: endpoints.UPDATE_USER_STATUS,
          method: "POST",
          body: body,
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
