import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../configuredURL";
import { endpoints } from "../../../core/constants/endpoints";
import { prepareHeaders } from "../../../core/utils/rtk.config";
import {
  IForgotResetPasswordRequest,
  IResetPasswordRequest,
  IResponse,
  IVerifyPinRequest,
} from "../types/IForgotResetPassword";

export const forgotResetPasswordApi = createApi({
  reducerPath: "forgotResetPasswordApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
    prepareHeaders: prepareHeaders,
  }),

  endpoints: (builder) => ({
    forgotPassword: builder.mutation<IResponse, IForgotResetPasswordRequest>({
      query(request) {
        return {
          url: endpoints.FORGOT_PASSWORD,
          method: "POST",
          body: request,
        };
      },
    }),
    verifyPin: builder.mutation<IResponse, IVerifyPinRequest>({
      query(request) {
        return {
          url: endpoints.VERIFY_PIN,
          method: "POST",
          body: request,
        };
      },
    }),
    resetPassword: builder.mutation<IResponse, IResetPasswordRequest>({
      query(request) {
        return {
          url: endpoints.RESET_PASSWORD,
          method: "POST",
          body: request,
        };
      },
    }),
  }),
});

export const { useForgotPasswordMutation, useVerifyPinMutation,useResetPasswordMutation } =
  forgotResetPasswordApi;
