import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../configuredURL";
import { endpoints } from "../../../core/constants/endpoints";
import { Governorate } from "../types/IRegion";

//const headers = { Accept: "application/json" };
export const regionApi = createApi({
  reducerPath: "regionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
    //prepareHeaders: prepareHeaders,
  }),
  tagTypes: ["Governorate"],

  endpoints: (builder) => ({
    governorates: builder.query<Governorate[], void>({
      query: () => ({ url: endpoints.GOVERNORATES }),
      transformResponse: (response: { data: Governorate[] }) => response.data,
    }),
    delegations: builder.query<Governorate[], number>({
      query: (id) => ({
        url: `/api/delegations/belongsToSameGovernorate/${id}`,
        transformResponse: (response: { data: Governorate[] }) => response.data,
      }),
    }),
  }),
});

export const { useGovernoratesQuery, useDelegationsQuery } = regionApi;
