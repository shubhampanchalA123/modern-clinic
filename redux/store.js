import { configureStore } from "@reduxjs/toolkit";
import registerApiReducer from "./slices/registerSlice";
import appointmentReducer from "./slices/appointmentSlice";
import planReducer from "./slices/planslice";
import adminPlanReducer from "./slices/adminPlanSlice";
import adminCouponReducer from "./slices/adminCouponSlice";
import adminBlogReducer from "./slices/adminBlogSlice";
import blogReducer from "./slices/blogSlice";

export const store = configureStore({
  reducer: {
    register: registerApiReducer,
    appointment: appointmentReducer,
    plans: planReducer,
    adminPlans: adminPlanReducer,
    adminCoupons: adminCouponReducer,
    adminBlogs: adminBlogReducer,
    blogs: blogReducer,
  },
});
