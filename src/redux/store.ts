import { regionApi } from "./api/region/regionApi";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { authApi } from "./api/auth/authApi";
import { userApi } from "./api/user/userApi";
import { adminApi } from "./api/admin/AdminApi";
import { dciApi } from "./api/dci/dciApi";
import { marqueApi } from "./api/admin/MarqueApi";
import { formApi } from "./api/admin/FormApi";
import { categoriesApi } from "./api/admin/CategoryApi";
import { medicationApi } from "./api/admin/MedicationApi";
import { lotApi } from "./api/lot/LotApi";
import { notificationApi } from "./api/notification/notificationApi";
import notificationSlice from "./features/notification";
import userSlice from "./features/userSlice";
import { stockApi } from "./api/stock/stockApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [regionApi.reducerPath]: regionApi.reducer,
    [adminApi.reducerPath]: adminApi.reducer,
    [dciApi.reducerPath]: dciApi.reducer,
    [marqueApi.reducerPath]: marqueApi.reducer,
    [formApi.reducerPath]: formApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [medicationApi.reducerPath]: medicationApi.reducer,
    [lotApi.reducerPath]: lotApi.reducer,
    [notificationApi.reducerPath]: notificationApi.reducer,
    [stockApi.reducerPath]: stockApi.reducer,
    notification: notificationSlice,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      authApi.middleware,
      userApi.middleware,
      regionApi.middleware,
      adminApi.middleware,
      dciApi.middleware,
      marqueApi.middleware,
      formApi.middleware,
      categoriesApi.middleware,
      medicationApi.middleware,
      lotApi.middleware,
      notificationApi.middleware,
      stockApi.middleware,
    ]),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
