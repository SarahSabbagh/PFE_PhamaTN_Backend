import { regionApi } from "./api/region/regionApi";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { authApi } from "./api/auth/authApi";
import { userApi } from "./api/user/userApi";
import { adminApi } from "./api/admin/AdminApi";
import { dciApi } from "./api/dci/dciApi";
import { marqueApi } from "./api/admin/MarqueApi";
import { formApi } from "./api/admin/FormApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [regionApi.reducerPath]: regionApi.reducer,
    [adminApi.reducerPath]: adminApi.reducer,
    [dciApi.reducerPath]: dciApi.reducer,
    [marqueApi.reducerPath]: marqueApi.reducer,
    [formApi.reducerPath]: formApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      authApi.middleware,
      userApi.middleware,
      regionApi.middleware,
      adminApi.middleware,
      dciApi.middleware,
      marqueApi.middleware,formApi.middleware
    ]),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
