import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "./slices/blogsSlice";
import portfoliosReducer from "./slices/portfoliosSlice";
import testimonialReducer from "./slices/testimonialsSlice";

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    portfolios: portfoliosReducer,
    testimonials: testimonialReducer,
  },
});
