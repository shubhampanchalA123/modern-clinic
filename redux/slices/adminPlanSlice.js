import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../axiosClient";

/* ================= CREATE PLAN ================= */
export const createPlan = createAsyncThunk(
  "adminPlans/createPlan",
  async (planData, thunkAPI) => {
    try {
      const token = typeof window !== "undefined" ? localStorage.getItem("adminToken") : null;
      
      const response = await axiosClient.post("admin/plans", planData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data.plan;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Plan creation failed"
      );
    }
  }
);

/* ================= GET ALL PLANS (ADMIN) ================= */
export const getAdminPlans = createAsyncThunk(
  "adminPlans/getAdminPlans",
  async (_, thunkAPI) => {
    try {
      const token = typeof window !== "undefined" ? localStorage.getItem("adminToken") : null;
      
      const response = await axiosClient.get("plans", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data.plans;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch plans"
      );
    }
  }
);

/* ================= UPDATE PLAN ================= */
export const updatePlan = createAsyncThunk(
  "adminPlans/updatePlan",
  async ({ planId, planData }, thunkAPI) => {
    try {
      const token = typeof window !== "undefined" ? localStorage.getItem("adminToken") : null;
      
      const response = await axiosClient.put(`plans/${planId}`, planData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data.plan;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Plan update failed"
      );
    }
  }
);

/* ================= DELETE PLAN ================= */
export const deletePlan = createAsyncThunk(
  "adminPlans/deletePlan",
  async (planId, thunkAPI) => {
    try {
      const token = typeof window !== "undefined" ? localStorage.getItem("adminToken") : null;
      
      const response = await axiosClient.delete(`plans/${planId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return planId;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Plan deletion failed"
      );
    }
  }
);

/* ================= SLICE ================= */
const adminPlanSlice = createSlice({
  name: "adminPlans",
  initialState: {
    loading: false,
    error: null,
    success: false,
    plans: [],
    selectedPlan: null
  },
  reducers: {
    clearAdminPlanState: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
    },
    selectPlan: (state, action) => {
      state.selectedPlan = action.payload;
    }
  },
  extraReducers: (builder) => {
    // Create Plan
    builder
      .addCase(createPlan.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(createPlan.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.plans.push(action.payload);
      })
      .addCase(createPlan.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });

    // Get Admin Plans
    builder
      .addCase(getAdminPlans.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAdminPlans.fulfilled, (state, action) => {
        state.loading = false;
        state.plans = action.payload;
      })
      .addCase(getAdminPlans.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Update Plan
    builder
      .addCase(updatePlan.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(updatePlan.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        const index = state.plans.findIndex(p => p._id === action.payload._id);
        if (index !== -1) {
          state.plans[index] = action.payload;
        }
      })
      .addCase(updatePlan.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });

    // Delete Plan
    builder
      .addCase(deletePlan.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deletePlan.fulfilled, (state, action) => {
        state.loading = false;
        state.plans = state.plans.filter(p => p._id !== action.payload);
      })
      .addCase(deletePlan.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { clearAdminPlanState, selectPlan } = adminPlanSlice.actions;
export default adminPlanSlice.reducer;
