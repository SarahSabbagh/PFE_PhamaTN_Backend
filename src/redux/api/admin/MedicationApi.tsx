import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { prepareHeaders } from "../../../core/utils/rtk.config";
import { endpoints } from "../../../core/constants/endpoints";
import {
  IFilterResponse,
  IResponse,
} from "../types/IResponseRequest";
import {
  IMedicationElement,
  IMedicationFilterRequest,
  IMedicationRequest,
} from "../types/IMedication";

const BASE_URL = process.env.REACT_APP_SERVER_ENDPOINT as string;

export const medicationApi = createApi({
  reducerPath: "medicationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
    prepareHeaders: prepareHeaders,
  }),
  tagTypes: ["Medication", "Medications"],
  endpoints: (builder) => ({
    MedicationsFilter: builder.query<
      IFilterResponse<IMedicationElement[]>,
      IMedicationFilterRequest
    >({
      query(request) {
        return {
          url: endpoints.FILTER_MEDICATIONS,
          params: request,
        };
      },
      providesTags: ["Medications"],
    }),
    deleteMedication: builder.mutation<IResponse, number>({
      query(id) {
        return {
          url: endpoints.MEDICATIONS + "/" + id,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Medications"],
    }),
    showMedication: builder.query<{ data: IMedicationElement }, number>({
      query(id) {
        return {
          url: endpoints.MEDICATIONS + "/" + id,
        };
      },
      providesTags: ["Medication"],
    }),

    updateMedication: builder.mutation<IResponse, IMedicationElement>({
      query: ({ id, ...request }) => ({
        headers: { Accept: "application/json" },
        url: endpoints.MEDICATIONS + "/" + id,
        params: { ...request },
        method: "PUT",
      }),
      invalidatesTags: ["Medication", "Medications"],
    }),
    addMedication: builder.mutation<IResponse, IMedicationRequest>({
      query: (request) => ({
        url: endpoints.MEDICATIONS,
        method: "POST",
        body: request,
      }),
      invalidatesTags: ["Medications"],
    }),
  }),
});
export const {
  useMedicationsFilterQuery,
  useAddMedicationMutation,
  useDeleteMedicationMutation,
  useShowMedicationQuery,
  useUpdateMedicationMutation,
} = medicationApi;
