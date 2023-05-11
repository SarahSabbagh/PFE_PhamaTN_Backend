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
    baseUrl: `${BASE_URL}`,
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
          url: endpoints.FILTER_MARQUE,
          params: request,
        };
      },
      providesTags: ["Marques"],
    }),

    Marques: builder.query<ISimpleElement[], void>({
      query() {
        return {
          url: endpoints.MARQUE,
        };
      },
      transformResponse: (response: { data: ISimpleElement[] }) =>
        response.data,

      providesTags: ["Marques"],
    }),

    deleteMarque: builder.mutation<IResponse, number>({
      query(id) {
        return {
          url: endpoints.MARQUE + "/" + id,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Marques"],
    }),
    showMarque: builder.query<{ data: ISimpleElement }, number>({
      query(id) {
        return {
          url: endpoints.MARQUE + "/" + id,
        };
      },
      providesTags: ["Marque"],
    }),

    updateMarque: builder.mutation<IResponse, ISimpleElement>({
      query: ({ id, name }) => ({
        headers: { Accept: "application/json" },
        url: endpoints.MARQUE + "/" + id,
        params: { name: name },
        method: "PUT",
      }),
      invalidatesTags: ["Marque", "Marques"],
    }),
    addMarque: builder.mutation<IResponse, string>({
      query: (request) => ({
        url: endpoints.MARQUE,
        method: "POST",
        body: { name: request },
      }),
      invalidatesTags: ["Marques"],
    }),
  }),
});
export const {
  useMarquesQuery,
  useMarquesFilterQuery,
  useAddMarqueMutation,
  useDeleteMarqueMutation,
  useShowMarqueQuery,
  useUpdateMarqueMutation,
} = marqueApi;
