import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../api/types/IUser";
import { userApi } from "../api/user/userApi";

export interface userState {
  user: IUser | null;
}
const initialState: userState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: () => initialState,
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      userApi.endpoints.getUser.matchFulfilled,
      (state, action) => {
        state.user = action.payload;
      }
    );
  },
});

export default userSlice.reducer;

export const { logout, setUser } = userSlice.actions;
