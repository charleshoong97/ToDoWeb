import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "./slice/authenticationSlice";
import toDoSlice from "./slice/toDoSlice";

export default configureStore({
  reducer: {
    authentication: authenticationReducer,
    todo: toDoSlice,
  },
  devTools: process.env.NODE_ENV === "development",
});
