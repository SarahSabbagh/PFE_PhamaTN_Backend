import { endpoints } from "./../../../core/constants/endpoints";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { prepareHeaders } from "../../../core/utils/rtk.config";
import { IFilterResponse, IResponse } from "../types/IResponseRequest";
import { IDci, IDciFilterRequest, IDciRequest } from "../types/IDci";

const BASE_URL = process.env.REACT_APP_SERVER_ENDPOINT as string;

export const dciApi = createApi({
  reducerPath: "dciApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
    headers: { Accept: "application/json" },
    prepareHeaders: prepareHeaders,
  }),
  tagTypes: ["Dcis", "Dci"],
  endpoints: (builder) => ({
    dcis: builder.query<IFilterResponse<IDci[]>, IDciRequest>({
      query(request) {
        return {
          url: endpoints.DCIS,
          params: request,
        };
      },
    }),

    filterDcis: builder.query<IFilterResponse<IDci[]>, IDciFilterRequest>({
      query(request) {
        return {
          url: endpoints.FILTER_DCIS,
          params: request,
        };
      },
      providesTags: ["Dcis"],
    }),
    deleteDcis: builder.mutation<IResponse, number>({
      query(id) {
        return {
          url: endpoints.DCIS + "/" + id,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Dcis"],
    }),
    showDci: builder.query<{ data: IDci }, number>({
      query(id) {
        return {
          url: endpoints.DCIS + "/" + id,
        };
      },
      providesTags: ["Dci"],
    }),

    updateDci: builder.mutation<IResponse, IDci>({
      query: ({ id, name }) => ({
        headers: { Accept: "application/json" },
        url: endpoints.DCIS + "/" + id,
        params: { name: name },
        method: "PUT",
      }),
      invalidatesTags: ["Dci", "Dcis"],
    }),
    addDci: builder.mutation<IResponse, string>({
      query: (request) => ({
        url: endpoints.DCIS,
        method: "POST",
        body: { name: request },
      }),
      invalidatesTags: ["Dcis"],
    }),
  }),
});
export const {
  useDcisQuery,
  useFilterDcisQuery,
  useDeleteDcisMutation,
  useUpdateDciMutation,
  useShowDciQuery,
  useAddDciMutation,
} = dciApi;
