import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { prepareHeaders } from "../../../core/utils/rtk.config";
import { endpoints } from "../../../core/constants/endpoints";
import { IResponse } from "../types/IResponseRequest";

const BASE_URL = process.env.REACT_APP_SERVER_ENDPOINT as string;

export interface INotificationResponse {
  id: string;
  created_at: string;
  data: { user_id: number; email: string; name: string };
}
export const notificationApi = createApi({
  reducerPath: "notificatioApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}` + endpoints.NOTIFICATION,
    prepareHeaders: prepareHeaders,
  }),
  tagTypes: ["Notification"],

  endpoints: (builder) => ({
    Notifications: builder.query<INotificationResponse[], number>({
      query(id) {
        return {
          url: endpoints.NOTIFICATION_UNREAD_REGISTERED + "/" + id,
        };
      },
      transformResponse: (response: { data: INotificationResponse[] }) =>
        response.data,
      providesTags: ["Notification"],
    }),
    markAsRead: builder.mutation<IResponse, { userId: number; id?: string }>({
      query({ userId, id }) {
        return {
          url: `${endpoints.MARK_AS_READ}/${userId}`,
          method: "PUT",
          params: { id },
        };
      },
      invalidatesTags: ["Notification"],
    }),
  }),
});
export const { useNotificationsQuery, useMarkAsReadMutation } = notificationApi;
