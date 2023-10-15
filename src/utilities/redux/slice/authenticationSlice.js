import { createSlice } from "@reduxjs/toolkit";

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState: {},
  reducers: {
    register: (state, action) => {
      return { ...action.payload };
    },
    remove: (state) => {
      return {};
    },
  },
});

export const { register, remove } = authenticationSlice.actions;

export default authenticationSlice.reducer;
