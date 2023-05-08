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
          url: endpoints.FILTER_MARQUE,
          params: request,
        };
      },
      providesTags: ["Marques"],
    }),
    deleteMarque: builder.mutation<IResponse, number>({
      query(id) {
        return {
          url: "/" + id,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Marques"],
    }),
    showMarque: builder.query<{ data: ISimpleElement }, number>({
      query(id) {
        return {
          url: "/" + id,
        };
      },
      providesTags: ["Marque"],
    }),

    updateMarque: builder.mutation<IResponse, ISimpleElement>({
      query: ({ id, name }) => ({
        headers: { Accept: "application/json" },
        url: "/" + id,
        params: { name: name },
        method: "PUT",
      }),
      invalidatesTags: ["Marque", "Marques"],
    }),
    addMarque: builder.mutation<IResponse, string>({
      query: (request) => ({
        url: "",
        method: "POST",
        body: { name: request },
      }),
      invalidatesTags: ["Marques"],
    }),
  }),
});
export const {
  useMarquesFilterQuery,
  useAddMarqueMutation,
  useDeleteMarqueMutation,
  useShowMarqueQuery,
  useUpdateMarqueMutation,
} = marqueApi;
