import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../axiosClient";

/* ================= GET ALL ADMIN BLOGS ================= */
export const getAdminBlogs = createAsyncThunk(
  "adminBlogs/getAdminBlogs",
  async (_, thunkAPI) => {
    try {
      const token = typeof window !== "undefined" ? localStorage.getItem("adminToken") : null;
      const response = await axiosClient.get("admin/blogs", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data?.data || [];
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch blogs"
      );
    }
  }
);

/* ================= GET BLOG BY ID ================= */
export const getAdminBlogById = createAsyncThunk(
  "adminBlogs/getAdminBlogById",
  async (id, thunkAPI) => {
    try {
      const token = typeof window !== "undefined" ? localStorage.getItem("adminToken") : null;
      const response = await axiosClient.get(`admin/blogs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data?.data || null;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch blog details"
      );
    }
  }
);

/* ================= CREATE BLOG ================= */
export const createAdminBlog = createAsyncThunk(
  "adminBlogs/createAdminBlog",
  async (formData, thunkAPI) => {
    try {
      const token = typeof window !== "undefined" ? localStorage.getItem("adminToken") : null;
      const response = await axiosClient.post("admin/blogs", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data?.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to create blog"
      );
    }
  }
);

/* ================= UPDATE BLOG ================= */
export const updateAdminBlog = createAsyncThunk(
  "adminBlogs/updateAdminBlog",
  async ({ id, formData }, thunkAPI) => {
    try {
      const token = typeof window !== "undefined" ? localStorage.getItem("adminToken") : null;
      const response = await axiosClient.put(`admin/blogs/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data?.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to update blog"
      );
    }
  }
);

/* ================= DELETE BLOG ================= */
export const deleteAdminBlog = createAsyncThunk(
  "adminBlogs/deleteAdminBlog",
  async (id, thunkAPI) => {
    try {
      const token = typeof window !== "undefined" ? localStorage.getItem("adminToken") : null;
      const response = await axiosClient.delete(`admin/blogs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return { id, data: response.data };
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to delete blog"
      );
    }
  }
);

/* ================= SLICE ================= */
const adminBlogSlice = createSlice({
  name: "adminBlogs",
  initialState: {
    loading: false,
    error: null,
    success: false,
    blogs: [],
    selectedBlog: null,
  },
  reducers: {
    clearAdminBlogState: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
    },
    selectBlog: (state, action) => {
      state.selectedBlog = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Get Admin Blogs
    builder
      .addCase(getAdminBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAdminBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload;
      })
      .addCase(getAdminBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Get Admin Blog By ID
    builder
      .addCase(getAdminBlogById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAdminBlogById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedBlog = action.payload;
      })
      .addCase(getAdminBlogById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Create Blog
    builder
      .addCase(createAdminBlog.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(createAdminBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        if (action.payload) {
          state.blogs.unshift(action.payload);
        }
      })
      .addCase(createAdminBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });

    // Update Blog
    builder
      .addCase(updateAdminBlog.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(updateAdminBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        if (action.payload) {
          const index = state.blogs.findIndex(
            (b) => (b.id || b._id) === (action.payload.id || action.payload._id)
          );
          if (index !== -1) {
            state.blogs[index] = action.payload;
          }
        }
      })
      .addCase(updateAdminBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });

    // Delete Blog
    builder
      .addCase(deleteAdminBlog.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteAdminBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.blogs = state.blogs.filter(
          (b) => (b.id || b._id) !== action.payload.id
        );
      })
      .addCase(deleteAdminBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearAdminBlogState, selectBlog } = adminBlogSlice.actions;
export default adminBlogSlice.reducer;
