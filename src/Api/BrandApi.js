import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const brandApi = createApi({
  reducerPath: "brandApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.thecodx.com/api",
  }),
  endpoints: (builder) => ({

    getBrands: builder.query({
      query: () => "/brands",
    }),

    getCaseStudies: builder.query({
      query: () => "/case-studies",
    }),

getCaseStudyById: builder.query({
  query: (id) => `/case-studies/id/${id}`,
}),
  }),
});

// ❗ export the correct hooks
export const {
  useGetBrandsQuery,
  useGetCaseStudiesQuery,
  useGetCaseStudyByIdQuery,   // ✅ use this
} = brandApi;