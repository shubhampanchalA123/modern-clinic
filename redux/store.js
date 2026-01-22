import { configureStore } from "@reduxjs/toolkit";
import registerApiReducer from "./slices/registerSlice";
import appointmentReducer from "./slices/appointmentSlice";
import planReducer from "./slices/planslice";

export const store = configureStore({
  reducer: {
    register: registerApiReducer,
    appointment: appointmentReducer,
    plans: planReducer,
  },
});
