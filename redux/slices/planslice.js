import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../axiosClient";

/* ================= GET PLANS ================= */
export const getPlans = createAsyncThunk(
  "plans/getPlans",
  async ({ type, region, stage }, thunkAPI) => {
    try {
      const params = new URLSearchParams();

      if (type) params.append("type", type);
      if (region) params.append("region", region);
      if (stage) params.append("stage", stage);

      const response = await axiosClient.get(`plans?${params.toString()}`);
      return { type, data: response.data.plans };
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Get plans failed"
      );
    }
  }
);

/* ================= SLICE ================= */
const planSlice = createSlice({
  name: "plans",
  initialState: {
    loading: false,
    error: null,

    generalPlans: [],
    consultantPlans: [],
    hairTreatmentPlans: [],
    addonPlans: [],
    appointmentPlans: []
  },
  reducers: {
    clearPlansState: (state) => {
      state.loading = false;
      state.error = null;
      state.generalPlans = [];
      state.consultantPlans = [];
      state.hairTreatmentPlans = [];
      state.addonPlans = [];
      state.appointmentPlans = [];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPlans.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPlans.fulfilled, (state, action) => {
        state.loading = false;

        const { type, data } = action.payload;

        switch (type) {
          case "GENERAL":
            state.generalPlans = data;
            break;

          case "CONSULTANT":
            state.consultantPlans = data;
            break;

          case "HAIR_TREATMENT":
            state.hairTreatmentPlans = data;
            break;

          case "ADDON":
            state.addonPlans = data;
            break;

          case "APPOINTMENT":
            state.appointmentPlans = data;
            break;

          default:
            break;
        }
      })
      .addCase(getPlans.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { clearPlansState } = planSlice.actions;
export default planSlice.reducer;
