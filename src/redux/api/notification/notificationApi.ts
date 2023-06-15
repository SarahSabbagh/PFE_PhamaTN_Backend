import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { prepareHeaders } from "../../../core/utils/rtk.config";
import { endpoints } from "../../../core/constants/endpoints";
import { IResponse } from "../types/IResponseRequest";
import { INotificationResponse } from "../types/INotification";

const BASE_URL = process.env.REACT_APP_SERVER_ENDPOINT as string;

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
