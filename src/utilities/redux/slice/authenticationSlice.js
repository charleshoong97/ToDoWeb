import { createSlice } from "@reduxjs/toolkit";

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState: {},
  reducers: {
    register: (state, action) => {
      return { ...action.payload };
    },
    logout: (state) => {
      return {};
    },
  },
});

export const { register, logout } = authenticationSlice.actions;

export default authenticationSlice.reducer;
