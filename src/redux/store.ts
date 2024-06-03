import { configureStore } from "@reduxjs/toolkit";
import layoutSlice from "./layout/layoutSlice";
import loginSlice from "./auth/login/loginSlice";
import analyticsSlice from "./analytics/analyticsSlice";
import holidaySlice from "./holiday/holidaySlice";
import jobsSlice from "./job/jobsSlice";
import blogSlice from "./blog/blogSlice";

const store = configureStore({
  reducer: {
    Layout: layoutSlice,
    Login: loginSlice,
    Analytics: analyticsSlice,
    Holiday: holidaySlice,
    Jobs: jobsSlice,
    Blog: blogSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export default store;
