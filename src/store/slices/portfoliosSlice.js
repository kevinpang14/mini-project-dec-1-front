// src/store/slices/portfoliosSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../axiosInstance";

// Our Works
// Fetch all portfolios
export const fetchPortfolioList = createAsyncThunk(
  "portfolios/fetchPortfolioList",
  async ({ page = 1, limit = 7 }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `/portfolios?page=${page}&limit=${limit}`
      );
      console.log("Fetch Portfolio List: ", response.data);
      console.log("Fetch Portfolio List .data.data: ", response.data.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to fetch portfolios"
      );
    }
  }
);

// Fetch portfolio details
export const fetchPortfolioDetail = createAsyncThunk(
  "portfolios/fetchPortfolioDetail",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/portfolios/${id}`);
      console.log("Fetch Portfolio Detail: ", response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to fetch portfolio detail"
      );
    }
  }
);

const portfolioSlice = createSlice({
  name: "portfolios",
  initialState: {
    list: {
      data: [],
      status: "idle",
      error: null,
    },
    detail: {
      data: null,
      status: "idle",
      error: null,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    // Fetch portfolio list
    builder
      .addCase(fetchPortfolioList.pending, (state) => {
        state.list.status = "loading";
        state.list.error = null;
      })
      .addCase(fetchPortfolioList.fulfilled, (state, action) => {
        state.list.status = "succeeded";
        state.list.data = action.payload.data;
      })
      .addCase(fetchPortfolioList.rejected, (state, action) => {
        state.list.status = "failed";
        state.list.error = action.payload;
      });

    // Fetch portfolio detail
    builder
      .addCase(fetchPortfolioDetail.pending, (state) => {
        state.detail.status = "loading";
        state.detail.error = null;
      })
      .addCase(fetchPortfolioDetail.fulfilled, (state, action) => {
        state.detail.status = "succeeded";
        state.detail.data = action.payload;
      })
      .addCase(fetchPortfolioDetail.rejected, (state, action) => {
        state.detail.status = "failed";
        state.detail.error = action.payload;
      });
  },
});

export default portfolioSlice.reducer;
