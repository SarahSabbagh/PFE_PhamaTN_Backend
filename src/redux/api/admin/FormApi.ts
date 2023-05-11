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

export const formApi = createApi({
  reducerPath: "formApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
    prepareHeaders: prepareHeaders,
  }),
  // keepUnusedDataFor: 60000,
  tagTypes: ["Form", "Forms"],
  endpoints: (builder) => ({
    formsFilter: builder.query<
      IFilterResponse<ISimpleElement[]>,
      IFilterRequest
    >({
      query(request) {
        return {
          url: endpoints.FILTER_FORM,
          params: request,
        };
      },
      providesTags: ["Forms"],
    }),

    Forms: builder.query<ISimpleElement[], void>({
      query() {
        return {
          url: endpoints.FORM,
        };
      },
      transformResponse: (response: { data: ISimpleElement[] }) =>
        response.data,

      providesTags: ["Forms"],
    }),
    
    deleteForm: builder.mutation<IResponse, number>({
      query(id) {
        return {
          url: endpoints.FORM + "/" + id,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Forms"],
    }),
    showForm: builder.query<{ data: ISimpleElement }, number>({
      query(id) {
        return {
          url: endpoints.FORM + "/" + id,
        };
      },
      providesTags: ["Form"],
    }),

    updateForm: builder.mutation<IResponse, ISimpleElement>({
      query: ({ id, name }) => ({
        headers: { Accept: "application/json" },
        url: endpoints.FORM + "/" + id,
        params: { name: name },
        method: "PUT",
      }),
      invalidatesTags: ["Form", "Forms"],
    }),
    addForm: builder.mutation<IResponse, string>({
      query: (request) => ({
        url: endpoints.FORM,
        method: "POST",
        body: { name: request },
      }),
      invalidatesTags: ["Forms"],
    }),
  }),
});
export const {
  useFormsQuery,
  useFormsFilterQuery,
  useAddFormMutation,
  useDeleteFormMutation,
  useShowFormQuery,
  useUpdateFormMutation,
} = formApi;
