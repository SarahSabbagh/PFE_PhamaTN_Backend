import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { prepareHeaders } from "../../../core/utils/rtk.config";
import { endpoints } from "../../../core/constants/endpoints";
import {
  IFilterRequest,
  IFilterResponse,
  IResponse,
} from "../types/IResponseRequest";
import { ILotElement, ILotRequest } from "../types/ILot";

const BASE_URL = process.env.REACT_APP_SERVER_ENDPOINT as string;

export const lotApi = createApi({
  reducerPath: "lotApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
    prepareHeaders: prepareHeaders,
  }),
  tagTypes: ["Lot", "Lots"],
  endpoints: (builder) => ({
    lotsFilter: builder.query<IFilterResponse<ILotElement[]>, IFilterRequest>({
      query(request) {
        return {
          url: endpoints.FILTER_LOTS,
          params: request,
        };
      },
      providesTags: ["Lots"],
    }),

    deleteLot: builder.mutation<IResponse, number>({
      query(id) {
        return {
          url:`${endpoints.LOTS}/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Lots"],
    }),
    showLot: builder.query<{ data: ILotElement }, number>({
      query(id) {
        return {
          url: `${endpoints.LOTS}/${id}`,
        };
      },
      providesTags: ["Lot"],
    }),

    updateLot: builder.mutation<IResponse, ILotRequest>({
      query: ({ id, ...request }) => ({
        headers: { Accept: "application/json" },
        url: `${endpoints.LOTS}/${id}`,
        params: { ...request },
        method: "PUT",
      }),
      invalidatesTags: ["Lot", "Lots"],
    }),
    addLot: builder.mutation<IResponse, ILotRequest>({
      query: (request) => ({
        url: endpoints.LOTS,
        method: "POST",
        body: request,
      }),
      invalidatesTags: ["Lots"],
    }),
  }),
});
export const {
  useLotsFilterQuery,
  useAddLotMutation,
  useDeleteLotMutation,
  useShowLotQuery,
  useUpdateLotMutation,
} = lotApi;
