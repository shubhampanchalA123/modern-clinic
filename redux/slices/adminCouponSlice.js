import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../axiosClient";

/* ================= CREATE COUPON ================= */
export const createCoupon = createAsyncThunk(
  "adminCoupons/createCoupon",
  async (couponData, thunkAPI) => {
    try {
      const token = typeof window !== "undefined" ? localStorage.getItem("adminToken") : null;
      
      const response = await axiosClient.post("coupons/create", couponData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data.coupon;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Coupon creation failed"
      );
    }
  }
);

/* ================= GET ALL COUPONS (ADMIN) ================= */
export const getAdminCoupons = createAsyncThunk(
  "adminCoupons/getAdminCoupons",
  async (_, thunkAPI) => {
    try {
      const token = typeof window !== "undefined" ? localStorage.getItem("adminToken") : null;
      
      const response = await axiosClient.get("coupons/all", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data.coupons || [];
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch coupons"
      );
    }
  }
);

/* ================= UPDATE COUPON ================= */
export const updateCoupon = createAsyncThunk(
  "adminCoupons/updateCoupon",
  async ({ couponId, couponData }, thunkAPI) => {
    try {
      const token = typeof window !== "undefined" ? localStorage.getItem("adminToken") : null;
      
      const response = await axiosClient.put(`coupons/${couponId}`, couponData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data.coupon;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Coupon update failed"
      );
    }
  }
);

/* ================= DELETE COUPON ================= */
export const deleteCoupon = createAsyncThunk(
  "adminCoupons/deleteCoupon",
  async (couponId, thunkAPI) => {
    try {
      const token = typeof window !== "undefined" ? localStorage.getItem("adminToken") : null;
      
      const response = await axiosClient.delete(`coupons/${couponId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return couponId;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Coupon deletion failed"
      );
    }
  }
);

/* ================= SLICE ================= */
const adminCouponSlice = createSlice({
  name: "adminCoupons",
  initialState: {
    loading: false,
    error: null,
    success: false,
    coupons: [],
    selectedCoupon: null
  },
  reducers: {
    clearAdminCouponState: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
    },
    selectCoupon: (state, action) => {
      state.selectedCoupon = action.payload;
    }
  },
  extraReducers: (builder) => {
    // Create Coupon
    builder
      .addCase(createCoupon.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(createCoupon.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.coupons.push(action.payload);
      })
      .addCase(createCoupon.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });

    // Get Admin Coupons
    builder
      .addCase(getAdminCoupons.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAdminCoupons.fulfilled, (state, action) => {
        state.loading = false;
        state.coupons = action.payload;
      })
      .addCase(getAdminCoupons.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Update Coupon
    builder
      .addCase(updateCoupon.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(updateCoupon.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        const index = state.coupons.findIndex(c => c._id === action.payload._id);
        if (index !== -1) {
          state.coupons[index] = action.payload;
        }
      })
      .addCase(updateCoupon.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });

    // Delete Coupon
    builder
      .addCase(deleteCoupon.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteCoupon.fulfilled, (state, action) => {
        state.loading = false;
        state.coupons = state.coupons.filter(c => c._id !== action.payload);
      })
      .addCase(deleteCoupon.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { clearAdminCouponState, selectCoupon } = adminCouponSlice.actions;
export default adminCouponSlice.reducer;
