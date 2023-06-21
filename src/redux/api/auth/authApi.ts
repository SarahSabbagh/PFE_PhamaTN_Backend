import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../configuredURL";
import { endpoints } from "../../../core/constants/endpoints";
import { prepareHeaders } from "../../../core/utils/rtk.config";
import { ILoginRequest } from "../../../pages/Login";
import {
  ILoginResponse,
  IRegisterRequest,
  IRegisterResponse,
} from "../types/ILoginRegister";

const headers = { Accept: "application/json" };
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
    prepareHeaders: prepareHeaders,
  }),
  endpoints: (builder) => ({
    login: builder.mutation<ILoginResponse, ILoginRequest>({
      query(loginRequest) {
        return {
          url: endpoints.SIGN_IN,
          method: "POST",
          body: loginRequest,
        };
      },
    }),
    register: builder.mutation<IRegisterResponse, IRegisterRequest>({
      query(registerRequest) {
        const formData = new FormData();
        formData.append("name", registerRequest.name);
        formData.append("email", registerRequest.email);
        formData.append("password", registerRequest.password);
        formData.append("pharmacyFirstName", registerRequest.pharmacyFirstName);
        formData.append("pharmacyLastName", registerRequest.pharmacyLastName);
        formData.append("governorate", String(registerRequest.governorate));
        formData.append("delegation", String(registerRequest.delegation));
        formData.append("address", registerRequest.address);
        formData.append("role", registerRequest.role);
        registerRequest.image &&
          formData.append("image", registerRequest.image[0]);
        registerRequest.type && formData.append("type", registerRequest.type);
        formData.append("fax", registerRequest.fax);
        formData.append("phone", registerRequest.phone);

        return {
          url: endpoints.SIGN_UP,
          headers: headers,
          method: "POST",
          body: formData,
          prepareHeaders: (headers: Headers) => {
            headers.set("Content-Type", "multipart/form-data");
            return headers;
          },
        };
      },
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
