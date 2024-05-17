import { configureStore } from "@reduxjs/toolkit";
import layoutSlice from "./layout/layoutSlice";
import loginSlice from "./auth/login/loginSlice";

const store = configureStore({
  reducer: {
    Layout: layoutSlice,
    Login: loginSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export default store;
