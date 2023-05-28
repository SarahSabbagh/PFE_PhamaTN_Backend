import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INotificationResponse } from "../api/notification/notificationApi";

export interface notificationState {
  notificationCount: number;
  notification: INotificationResponse | null;
}
const initialState: notificationState = {
  notificationCount: 0,
  notification: null,
};
const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setNotification: (state, action: PayloadAction<INotificationResponse>) => {
      state.notification = action.payload;
    },
    resetNotification: (state) => {
      state.notification = null;
    },
    setNotificationCount: (state, action: PayloadAction<number>) => {
      state.notificationCount = action.payload;
    },
    incrementNotificationCount: (state) => {
      state.notificationCount += 1;
    },
    resetNotificationCount: (state) => {
      state.notificationCount = 0;
    },
  },
});

export const {
  setNotificationCount,
  resetNotification,
  setNotification,
  incrementNotificationCount,
  resetNotificationCount,
} = notificationSlice.actions;

export default notificationSlice.reducer;
