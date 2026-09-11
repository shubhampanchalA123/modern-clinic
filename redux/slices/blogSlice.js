import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../axiosClient";

/* ================= FETCH PUBLIC BLOGS ================= */
export const fetchPublicBlogs = createAsyncThunk(
  "blogs/fetchPublicBlogs",
  async (params = {}, thunkAPI) => {
    try {
      const query = new URLSearchParams();
      if (params.page) query.append("page", params.page);
      if (params.limit) query.append("limit", params.limit);
      if (params.category && params.category !== "All") query.append("category", params.category);
      if (params.search) query.append("search", params.search);

      const queryString = query.toString();
      const url = queryString ? `blogs?${queryString}` : "blogs";
      const response = await axiosClient.get(url);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch blogs"
      );
    }
  }
);

/* ================= FETCH PUBLIC BLOG BY SLUG ================= */
export const fetchPublicBlogBySlug = createAsyncThunk(
  "blogs/fetchPublicBlogBySlug",
  async (slug, thunkAPI) => {
    try {
      const response = await axiosClient.get(`blogs/${slug}`);
      return response.data?.data || null;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Blog not found"
      );
    }
  }
);

/* ================= FETCH VIEW MORE / RECENT BLOGS ================= */
export const fetchPublicBlogsViewMore = createAsyncThunk(
  "blogs/fetchPublicBlogsViewMore",
  async (limit = 6, thunkAPI) => {
    try {
      const response = await axiosClient.get(`blogs/view-more?limit=${limit}`);
      return response.data?.data || [];
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch view more blogs"
      );
    }
  }
);

/* ================= SLICE ================= */
const blogSlice = createSlice({
  name: "blogs",
  initialState: {
    loading: false,
    articleLoading: false,
    error: null,
    articleError: null,
    blogs: [],
    pagination: {
      total: 0,
      page: 1,
      limit: 12,
      pages: 1,
    },
    currentBlog: null,
    recentBlogs: [],
  },
  reducers: {
    clearBlogErrors: (state) => {
      state.error = null;
      state.articleError = null;
    },
    clearCurrentBlog: (state) => {
      state.currentBlog = null;
      state.articleError = null;
    },
  },
  extraReducers: (builder) => {
    // Fetch Blogs List
    builder
      .addCase(fetchPublicBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPublicBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload?.data || [];
        state.pagination = action.payload?.pagination || {
          total: action.payload?.data?.length || 0,
          page: 1,
          limit: 12,
          pages: 1,
        };
      })
      .addCase(fetchPublicBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Fetch Single Blog By Slug
    builder
      .addCase(fetchPublicBlogBySlug.pending, (state) => {
        state.articleLoading = true;
        state.articleError = null;
      })
      .addCase(fetchPublicBlogBySlug.fulfilled, (state, action) => {
        state.articleLoading = false;
        state.currentBlog = action.payload;
      })
      .addCase(fetchPublicBlogBySlug.rejected, (state, action) => {
        state.articleLoading = false;
        state.articleError = action.payload;
        state.currentBlog = null;
      });

    // Fetch View More
    builder
      .addCase(fetchPublicBlogsViewMore.fulfilled, (state, action) => {
        state.recentBlogs = action.payload || [];
      });
  },
});

export const { clearBlogErrors, clearCurrentBlog } = blogSlice.actions;
export default blogSlice.reducer;
