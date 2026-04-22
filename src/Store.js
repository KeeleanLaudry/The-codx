import { configureStore } from "@reduxjs/toolkit";
import { brandApi } from "./Api/BrandApi";

export const store = configureStore({
  reducer: {
    [brandApi.reducerPath]: brandApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(brandApi.middleware),
});