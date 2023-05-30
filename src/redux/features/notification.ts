import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INotificationResponse } from "../api/notification/notificationApi";

export interface notificationState {
  notificationCount: number;
  newNotification: INotificationResponse | null;
  notifications: INotificationResponse[] | null;
}
const initialState: notificationState = {
  notificationCount: 0,
  newNotification: null,
  notifications: null,
};
const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setNotification: (state, action: PayloadAction<INotificationResponse>) => {
      state.newNotification = action.payload;
      state.notifications = [...state.notifications!, state.newNotification];
      state.notificationCount = state.notifications.length;
      state.newNotification = null;
    },
    setNotifications: (
      state,
      action: PayloadAction<INotificationResponse[]>
    ) => {
      state.notifications = action.payload;
      state.notificationCount = state.notifications.length;
    },
    resetNotification: (state) => {
      state.newNotification = null;
    },
    setNotificationCount: (state, action: PayloadAction<number>) => {
      state.notificationCount = action.payload;
    },
    incrementNotificationCount: (state) => {
      state.notificationCount += 1;
    },
    decrementNotificationCount: (state) => {
      state.notificationCount -= 1;
    },
    resetNotificationCount: (state) => {
      state.notificationCount = 0;
    },
  },
});

export const {
  setNotifications,
  setNotificationCount,
  resetNotification,
  setNotification,
  incrementNotificationCount,
  resetNotificationCount,
  decrementNotificationCount,
} = notificationSlice.actions;

export default notificationSlice.reducer;
