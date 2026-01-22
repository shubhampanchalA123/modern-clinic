import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "./../axiosClient";

// ------------------- REGISTER APPOINTMENT API -------------------
export const registerAppointment = createAsyncThunk(
  "appointment/registerAppointment",
  async (formData, thunkAPI) => {
    try {
      const response = await axiosClient.post("appointments/register", formData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Register appointment failed"
      );
    }
  }
);

// ------------------- VERIFY APPOINTMENT OTP API -------------------
export const verifyAppointmentOtp = createAsyncThunk(
  "appointment/verifyAppointmentOtp",
  async ({ phone, idToken, appointmentId }, thunkAPI) => {
    try {
      console.log("Calling backend verify with:", { phone, appointmentId, idToken: idToken.substring(0, 50) + "..." });
      const response = await axiosClient.post("appointments/verify", {
        phone,
        idToken,
        appointmentId
      });
      console.log("Backend verify response:", response.data);
      return response.data;
    } catch (error) {
      console.log("Backend verify error:", error);
      console.log("Error response:", error.response);
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Verify appointment OTP failed"
      );
    }
  }
);

// ------------------- CREATE APPOINTMENT ORDER API -------------------
export const createAppointmentOrder = createAsyncThunk(
  "appointment/createAppointmentOrder",
  async ({ appointmentId, selectedPlans, userType }, thunkAPI) => {
    try {
      const response = await axiosClient.post("payments/appointment/create-order", {
        appointmentId,
        selectedPlans,
        userType
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Create appointment order failed"
      );
    }
  }
);

// ------------------- VERIFY APPOINTMENT PAYMENT API -------------------
export const verifyAppointmentPayment = createAsyncThunk(
  "appointment/verifyAppointmentPayment",
  async ({ appointmentId, razorpay_payment_id, razorpay_order_id, razorpay_signature }, thunkAPI) => {
    try {
      const response = await axiosClient.post("payments/appointment/verify", {
        appointmentId,
        razorpay_payment_id,
        razorpay_order_id,
        razorpay_signature
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Verify appointment payment failed"
      );
    }
  }
);

// ------------------- SLICE -------------------
const appointmentSlice = createSlice({
  name: "appointment",
  initialState: {
    loading: false,
    error: null,
    registerAppointmentSuccess: false,
    verifyAppointmentSuccess: false,
    createAppointmentOrderSuccess: false,
    verifyAppointmentPaymentSuccess: false,
    appointmentId: null,
    orderDetails: null
  },
  reducers: {
    clearApiState: (state) => {
      state.loading = false;
      state.error = null;
      state.registerAppointmentSuccess = false;
      state.verifyAppointmentSuccess = false;
      state.createAppointmentOrderSuccess = false;
      state.verifyAppointmentPaymentSuccess = false;
      state.appointmentId = null;
      state.orderDetails = null;
    }
  },
  extraReducers: (builder) => {
    builder

      // REGISTER APPOINTMENT
      .addCase(registerAppointment.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.registerAppointmentSuccess = false;
      })
      .addCase(registerAppointment.fulfilled, (state, action) => {
        state.loading = false;
        state.registerAppointmentSuccess = true;
        state.appointmentId = action.payload.appointmentId;
      })
      .addCase(registerAppointment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.registerAppointmentSuccess = false;
      })

      // VERIFY APPOINTMENT OTP
      .addCase(verifyAppointmentOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.verifyAppointmentSuccess = false;
      })
      .addCase(verifyAppointmentOtp.fulfilled, (state) => {
        state.loading = false;
        state.verifyAppointmentSuccess = true;
      })
      .addCase(verifyAppointmentOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.verifyAppointmentSuccess = false;
      })

      // CREATE APPOINTMENT ORDER
      .addCase(createAppointmentOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.createAppointmentOrderSuccess = false;
      })
      .addCase(createAppointmentOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.createAppointmentOrderSuccess = true;
        state.orderDetails = action.payload;
      })
      .addCase(createAppointmentOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.createAppointmentOrderSuccess = false;
      })

      // VERIFY APPOINTMENT PAYMENT
      .addCase(verifyAppointmentPayment.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.verifyAppointmentPaymentSuccess = false;
      })
      .addCase(verifyAppointmentPayment.fulfilled, (state) => {
        state.loading = false;
        state.verifyAppointmentPaymentSuccess = true;
      })
      .addCase(verifyAppointmentPayment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.verifyAppointmentPaymentSuccess = false;
      });
  },
});

export const { clearApiState } = appointmentSlice.actions;
export default appointmentSlice.reducer;