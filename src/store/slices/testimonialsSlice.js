// src/store/slices/testimonialsSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../axiosInstance";

// Testimonials
// Fetch all testimonials
export const fetchTestimonialsList = createAsyncThunk(
  "testimonials/fetchTestimonialsList",
  async ({ limit = 2 }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/testimonials?limit=${limit}`);
      console.log("Fetch Testimonials List: ", response.data);
      console.log("Fetch Testimonials List .data.data: ", response.data.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to fetch Testimonials"
      );
    }
  }
);

const testimonialSlice = createSlice({
  name: "testimonials",
  initialState: {
    list: {
      data: [],
      status: "idle",
      error: null,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    // Fetch testimonials list
    builder
      .addCase(fetchTestimonialsList.pending, (state) => {
        state.list.status = "loading";
        state.list.error = null;
      })
      .addCase(fetchTestimonialsList.fulfilled, (state, action) => {
        state.list.status = "succeeded";
        state.list.data = action.payload.data;
      })
      .addCase(fetchTestimonialsList.rejected, (state, action) => {
        state.list.status = "failed";
        state.list.error = action.payload;
      });
  },
});

export default testimonialSlice.reducer;
