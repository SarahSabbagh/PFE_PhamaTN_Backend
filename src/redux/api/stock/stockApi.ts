import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { prepareHeaders } from "../../../core/utils/rtk.config";
import { endpoints } from "../../../core/constants/endpoints";
import { IFilterResponse, IResponse } from "../types/IResponseRequest";
import { IStockElement, IStockElementRequest } from "../types/IStock";

const BASE_URL = process.env.REACT_APP_SERVER_ENDPOINT as string;

export const stockApi: any = createApi({
  reducerPath: "stockApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}${endpoints.STOCK}`,
    prepareHeaders: prepareHeaders,
  }),
  tagTypes: ["stock"],
  endpoints: (builder) => ({
    stock: builder.query<IFilterResponse<IStockElement[]>, { user_id: number }>(
      {
        query(id) {
          return {
            url: endpoints.lOT_BELONG_TO_USER,
            params: { user_id: id },
          };
        },
        providesTags: ["stock"],
      }
    ),

    deleteLotInStock: builder.mutation<
      IResponse,
      { user_id: number; lot_id: number }
    >({
      query(request) {
        return {
          url: endpoints.DELETE_LOT_IN_STOCK,
          method: "DELETE",
          params: request,
        };
      },
      invalidatesTags: ["stock"],
    }),
    addLotToStock: builder.mutation<IResponse, IStockElementRequest>({
      query: (request) => ({
        url: endpoints.ADD_LOT_TO_STOCK,
        method: "POST",
        body: request,
      }),
      invalidatesTags: ["stock"],
    }),
    updateLotQuantity: builder.mutation<IResponse, IStockElementRequest>({
      query: (request) => ({
        url: endpoints.ADD_LOT_QUANTITY,
        params: request,
        method: "PUT",
      }),
      invalidatesTags: ["stock"],
    }),
  }),
});
export const {
  useStockQuery,
  useAddLotToStockMutation,
  useDeleteLotInStockMutation,
  //   useShowLotQuery,
  useUpdateLotQuantityMutation,
} = stockApi;
