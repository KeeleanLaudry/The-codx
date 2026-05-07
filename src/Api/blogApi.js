import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.thecodx.com/api" }),
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => "/blogs",
    }),
getBlogBySlug: builder.query({
  query: (slug) => `/blogs/${slug}`, // ✅ backend route /:slug se match
}),

    createBlog: builder.mutation({
      query: (data) => ({ url: "/blogs", method: "POST", body: data }),
    }),
    updateBlog: builder.mutation({
      query: ({ id, ...data }) => ({ url: `/blogs/${id}`, method: "PUT", body: data }),
    }),
    deleteBlog: builder.mutation({
      query: (id) => ({ url: `/blogs/${id}`, method: "DELETE" }),
    }),
  }),
});

// export mein bhi add karo
export const {
  useGetBlogsQuery,
  useGetBlogBySlugQuery, // ✅
  useCreateBlogMutation,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = blogApi;