import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth/auth.slice";
import dashboardSlice from "./dashboard/dashboard.slice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    dashboard: dashboardSlice,
  },
});
