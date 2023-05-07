import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { prepareHeaders } from "../../../core/utils/rtk.config";
import { endpoints } from "../../../core/constants/endpoints";
import {
  IFilterRequest,
  IFilterResponse,
  IResponse,
  ISimpleElement,
} from "../types/IResponseRequest";

const BASE_URL = process.env.REACT_APP_SERVER_ENDPOINT as string;

export const marqueApi = createApi({
  reducerPath: "marqueApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}` + endpoints.MARQUE,
    prepareHeaders: prepareHeaders,
  }),
  // keepUnusedDataFor: 60000,
  tagTypes: ["Marque", "Marques"],
  endpoints: (builder) => ({
    marquesFilter: builder.query<
      IFilterResponse<ISimpleElement[]>,
      IFilterRequest
    >({
      query(request) {
        return {
          url: endpoints.FILTER_DCIS,
          params: request,
        };
      },
      providesTags: ["Marques"],
    }),
    userActivation: builder.mutation<IResponse, number>({
      query(id) {
        return {
          url: endpoints.ADMIN + endpoints.USER_ACTIVATION + id,
          method: "PUT",
        };
      },
      invalidatesTags: ["Marque"],
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
      invalidatesTags: ["Marque"],
    }),
    deleteUser: builder.mutation<IResponse, number>({
      query(id) {
        return {
          url: endpoints.USERS + "/" + id,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Marque"],
    }),
  }),
});
export const { useMarquesFilterQuery } = marqueApi;
