import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../axiosInstance";

// Fetch blog list
export const fetchBlogList = createAsyncThunk(
  "blogs/fetchBlogList",
  async ({ limit = 3 }, { rejectWithValue }) => {
    try {
      console.log("BASE API URL:", import.meta.env.VITE_BASE_URL);
      const response = await axiosInstance.get(`/blogs`, {
        params: { limit }, //default limit is 3
      });
      console.log("API Response:", response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch blogs");
    }
  }
);

// Fetch blog details
export const fetchBlogDetail = createAsyncThunk(
  "blogs/fetchBlogDetail",
  async (slug, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/blogs/${slug}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to fetch blog detail"
      );
    }
  }
);

// Blog slice
const blogsSlice = createSlice({
  name: "blogs",
  initialState: {
    data: [], // Array for blog data
    page: 1, // Current page
    limit: 3,
    status: "idle", // Loading status: idle | loading | succeeded | failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetching blogs
      .addCase(fetchBlogList.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchBlogList.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload.data;
        state.page = action.payload.page;
        state.limit = action.payload.limit;
      })
      .addCase(fetchBlogList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // Fetching blog detail
      .addCase(fetchBlogDetail.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBlogDetail.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.detail = action.payload;
      })
      .addCase(fetchBlogDetail.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default blogsSlice.reducer;
