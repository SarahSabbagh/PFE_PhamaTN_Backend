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

export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
    prepareHeaders: prepareHeaders,
  }),
  // keepUnusedDataFor: 60000,
  tagTypes: ["Category", "Categories"],
  endpoints: (builder) => ({
    categoriesFilter: builder.query<
      IFilterResponse<ISimpleElement[]>,
      IFilterRequest
    >({
      query(request) {
        return {
          url: endpoints.FILTER_CATEGORY,
          params: request,
        };
      },
      providesTags: ["Categories"],
    }),
    deleteCategory: builder.mutation<IResponse, number>({
      query(id) {
        return {
          url: endpoints.CATEGORY + "/" + id,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Categories"],
    }),
    showCategory: builder.query<{ data: ISimpleElement }, number>({
      query(id) {
        return {
          url: endpoints.CATEGORY + "/" + id,
        };
      },
      providesTags: ["Category"],
    }),

    updateCategory: builder.mutation<IResponse, ISimpleElement>({
      query: ({ id, name }) => ({
        headers: { Accept: "application/json" },
        url: endpoints.CATEGORY + "/" + id,
        params: { name: name },
        method: "PUT",
      }),
      invalidatesTags: ["Category", "Categories"],
    }),
    addCategory: builder.mutation<IResponse, string>({
      query: (request) => ({
        url: endpoints.CATEGORY,
        method: "POST",
        body: { name: request },
      }),
      invalidatesTags: ["Categories"],
    }),
  }),
});
export const {
  useCategoriesFilterQuery,
  useAddCategoryMutation,
  useDeleteCategoryMutation,
  useShowCategoryQuery,
  useUpdateCategoryMutation,
} = categoriesApi;
