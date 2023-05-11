import { endpoints } from "./../../../core/constants/endpoints";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { prepareHeaders } from "../../../core/utils/rtk.config";
import {
  IFilterRequest,
  IFilterResponse,
  IRequest,
  IResponse,
  ISimpleElement,
} from "../types/IResponseRequest";
import { IDci } from "../types/IMarque";

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
    filterDcis: builder.query<
      IFilterResponse<ISimpleElement[]>,
      IFilterRequest
    >({
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
    dcis: builder.query<IDci[], void>({
      query() {
        return {
          url: endpoints.DCIS,
        };
      },
      transformResponse: (response: { data: ISimpleElement[] }) =>
        response.data,

      providesTags: ["Dcis"],
    }),
    showDci: builder.query<{ data: ISimpleElement }, number>({
      query(id) {
        return {
          url: endpoints.DCIS + "/" + id,
        };
      },
      providesTags: ["Dci"],
    }),

    updateDci: builder.mutation<IResponse, ISimpleElement>({
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
