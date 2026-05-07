import { configureStore } from "@reduxjs/toolkit";
import { brandApi } from "./Api/BrandApi";
import { blogApi } from "./Api/blogApi";

export const store = configureStore({
  reducer: {
    [brandApi.reducerPath]: brandApi.reducer,
    [blogApi.reducerPath]: blogApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(brandApi.middleware)
      .concat(blogApi.middleware),
});