import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "./slice/authenticationSlice";

export default configureStore({
  reducer: {
    authentication: authenticationReducer,
  },
  devTools: process.env.NODE_ENV === "development",
});
