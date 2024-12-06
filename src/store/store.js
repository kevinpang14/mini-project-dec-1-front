import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "./slices/blogsSlice";

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
  },
});
