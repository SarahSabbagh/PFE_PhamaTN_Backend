import { createSlice } from "@reduxjs/toolkit";
import { globalVariables } from "../../core/constants/globalVariables";
import { authApi } from "../api/auth/authApi";
export interface userState {
  accessToken: string | null;
  isAuthenticated: boolean;
}
const initialState = {
  accessToken: localStorage.getItem(globalVariables.TOKEN)
    ? localStorage.getItem(globalVariables.TOKEN)
    : null,
  isAuthenticated: localStorage.getItem(globalVariables.TOKEN) ? true : false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
      state.isAuthenticated = true;

      localStorage.setItem(globalVariables.TOKEN, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(authApi.endpoints.logout.matchFulfilled, (state) => {
      state.isAuthenticated = false;
      localStorage.removeItem(globalVariables.TOKEN);
    });
  },
});

export const { setAccessToken } = authSlice.actions;
export default authSlice.reducer;
