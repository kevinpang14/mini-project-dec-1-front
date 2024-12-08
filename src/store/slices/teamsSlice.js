import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../axiosInstance";

// Fetch Team Data
export const fetchTeamByUsernames = createAsyncThunk(
  "teams/fetchByUsernames",
  async (usernames, { rejectWithValue }) => {
    try {
      const queryParams = usernames
        .map((username, index) => `usernames[${index}]=${username}`)
        .join("&");
      const response = await axiosInstance.get(`/teams?${queryParams}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

const teamSlice = createSlice({
  name: "teams",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeamByUsernames.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTeamByUsernames.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload.data;
      })
      .addCase(fetchTeamByUsernames.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
      });
  },
});

export default teamSlice.reducer;
