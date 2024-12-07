import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../axiosInstance";

// fetch portfolio list

export const fetchPortfolioList = createAsyncThunk(
  "portfolio/fetchPortfolioList",
  async ({ limit = 7, page = 1 }) => {
    const response = await axiosInstance.get(
      `/portfolio?limit=${limit}&page=${page}`
    );
    return response.data;
  }
);
