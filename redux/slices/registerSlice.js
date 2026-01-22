import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "./../axiosClient";

/* ================= VERIFY USER ================= */
export const verifyUser = createAsyncThunk(
  "register/verifyUser",
  async (payload, thunkAPI) => {
    try {
      const response = await axiosClient.post(
        "bookingconsultancy/verify",
        payload
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Verify API failed"
      );
    }
  }
);

/* ================= REGISTER USER ================= */
export const registerUser = createAsyncThunk(
  "register/registerUser",
  async (formData, thunkAPI) => {
    try {
      const response = await axiosClient.post(
        "bookingconsultancy/register",
        formData
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Registration failed"
      );
    }
  }
);

/* ================= SUBMIT DATA ================= */
export const submitData = createAsyncThunk(
  "register/submitData",
  async ({ consultantId, consultationData, scalpPhoto }, thunkAPI) => {
    try {
      let data = {
        consultantId,
        consultationData: JSON.stringify(consultationData)
      };
      let headers = {};

      if (scalpPhoto) {
        const formData = new FormData();
        formData.append("consultantId", consultantId);
        formData.append("consultationData", JSON.stringify(consultationData));
        formData.append("scalpPhoto", scalpPhoto);
        data = formData;
        headers["Content-Type"] = "multipart/form-data";
      }

      const response = await axiosClient.post(
        "bookingconsultancy/submit",
        data,
        { headers }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Submit data failed"
      );
    }
  }
);

/* ================= CREATE ORDER ================= */
export const createOrder = createAsyncThunk(
  "register/createOrder",
  async ({ consultantId, selectedPlans, userType }, thunkAPI) => {
    try {
      const response = await axiosClient.post("payments/create-order", {
        consultantId,
        selectedPlans,
        userType
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Create order failed"
      );
    }
  }
);

/* ================= VERIFY PAYMENT ================= */
export const verifyPayment = createAsyncThunk(
  "register/verifyPayment",
  async (
    { consultantId, razorpay_payment_id, razorpay_order_id, razorpay_signature },
    thunkAPI
  ) => {
    try {
      const response = await axiosClient.post("payments/verify", {
        consultantId,
        razorpay_payment_id,
        razorpay_order_id,
        razorpay_signature
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Verify payment failed"
      );
    }
  }
);

/* ================= REGISTER APPOINTMENT ================= */
export const registerAppointment = createAsyncThunk(
  "register/registerAppointment",
  async (formData, thunkAPI) => {
    try {
      const response = await axiosClient.post("register", formData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Register appointment failed"
      );
    }
  }
);

/* ================= VERIFY APPOINTMENT OTP ================= */
export const verifyAppointmentOtp = createAsyncThunk(
  "register/verifyAppointmentOtp",
  async ({ phone, idToken, appointmentId }, thunkAPI) => {
    try {
      const response = await axiosClient.post("verify", {
        phone,
        idToken,
        appointmentId
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Verify appointment OTP failed"
      );
    }
  }
);



/* ================= SLICE ================= */
const registerApiSlice = createSlice({
  name: "register",
  initialState: {
    loading: false,
    error: null,

    verifySuccess: false,
    registerSuccess: false,
    submitSuccess: false,
    createOrderSuccess: false,
    orderDetails: null,

    registerAppointmentSuccess: false,
    verifyAppointmentSuccess: false,
    appointmentId: null,
    consultantId: null,
  },
  reducers: {
    clearApiState: (state) => {
      state.loading = false;
      state.error = null;

      state.verifySuccess = false;
      state.registerSuccess = false;
      state.submitSuccess = false;
      state.createOrderSuccess = false;
      state.orderDetails = null;

      state.registerAppointmentSuccess = false;
      state.verifyAppointmentSuccess = false;
      state.appointmentId = null;
      state.consultantId = null;

      
    }
  },
  extraReducers: (builder) => {
    builder
      /* VERIFY USER */
      .addCase(verifyUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.verifySuccess = false;
      })
      .addCase(verifyUser.fulfilled, (state) => {
        state.loading = false;
        state.verifySuccess = true;
      })
      .addCase(verifyUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.verifySuccess = false;
      })

      /* REGISTER USER */
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.registerSuccess = false;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.registerSuccess = true;
        state.consultantId = action.payload.consultantId;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.registerSuccess = false;
      })

      /* SUBMIT DATA */
      .addCase(submitData.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.submitSuccess = false;
      })
      .addCase(submitData.fulfilled, (state) => {
        state.loading = false;
        state.submitSuccess = true;
      })
      .addCase(submitData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.submitSuccess = false;
      })

      /* CREATE ORDER */
      .addCase(createOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.createOrderSuccess = false;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.createOrderSuccess = true;
        state.orderDetails = action.payload;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.createOrderSuccess = false;
      })

      /* REGISTER APPOINTMENT */
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

      /* VERIFY APPOINTMENT OTP */
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

      
  }
});

export const { clearApiState } = registerApiSlice.actions;
export default registerApiSlice.reducer;
