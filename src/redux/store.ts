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
import notificationReducer from "./features/notification";
import userReducer from "./features/userSlice";
import { stockApi } from "./api/stock/stockApi";
import { searchMedicationApi } from "./api/searchMed/searchMedApi";
import storage from "redux-persist/lib/storage";
import { forgotResetPasswordApi } from "./api/forgotResetPassword/ForgotResetPassword";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};
export const persistedReducer = persistReducer(persistConfig, userReducer);

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
    [searchMedicationApi.reducerPath]: searchMedicationApi.reducer,
    [forgotResetPasswordApi.reducerPath]: forgotResetPasswordApi.reducer,
    notification: notificationReducer,
    user: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([
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
      searchMedicationApi.middleware,
      forgotResetPasswordApi.middleware,
    ]),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
export const persistor = persistStore(store);
