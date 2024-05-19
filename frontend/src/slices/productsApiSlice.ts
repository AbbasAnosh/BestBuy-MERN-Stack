import { apiSlice } from "./apiSlice";
export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ pageNumber, ...filters }) => ({
        url: "http://localhost:8000/api/products",
        params: {
          ...filters,
          pageNumber,
        },
      }),
      providesTags: ["Product"],
      keepUnusedDataFor: 5,
    }),

    getSearchProducts: builder.query({
      query: (keyword) => ({
        url: `http://localhost:8000/api/products/search?keyword=${keyword}`,
      }),
      providesTags: ["Product"],
      keepUnusedDataFor: 5,
    }),

    getProductDetails: builder.query({
      query: (productId) => ({
        url: `http://localhost:8000/api/products/${productId}`,
      }),
      keepUnusedDataFor: 5,
    }),
    createProduct: builder.mutation({
      query: (productData) => ({
        url: "http://localhost:8000/api/products",
        method: "POST",
        body: productData,
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Product"],
    }),
    updateProduct: builder.mutation({
      query: (data) => ({
        url: `http://localhost:8000/api/products/${data.productId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Product"],
    }),
    uploadProductImage: builder.mutation({
      query: ({ productId, formData }) => ({
        url: `http://localhost:8000/api/upload/${productId}`,
        method: "POST",
        body: formData,
      }),
    }),
    uploadAllProductImage: builder.mutation({
      query: ({ formData }) => ({
        url: "http://localhost:8000/api/upload",
        method: "POST",
        body: formData,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (productId) => ({
        url: `http://localhost:8000/api/products/${productId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
    createReview: builder.mutation({
      query: (data) => ({
        url: `http://localhost:8000/api/products/${data.productId}/reviews`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Product"],
    }),
    getNewArrival: builder.query({
      query: () => ({
        url: "http://localhost:8000/api/products/new-arrival",
      }),
      providesTags: ["Product"],
      keepUnusedDataFor: 5,
    }),
    getFeaturedProducts: builder.query({
      query: () => ({
        url: "http://localhost:8000/api/products/featured-products",
      }),
      providesTags: ["Product"],
      keepUnusedDataFor: 5,
    }),
    getTopProducts: builder.query({
      query: () => ({
        url: "http://localhost:8000/api/products/top-products",
      }),
      providesTags: ["Product"],
      keepUnusedDataFor: 5,
    }),
    getWomenProducts: builder.query({
      query: ({ pageNumber }) => ({
        url: "http://localhost:8000/api/products/women",
        params: {
          pageNumber,
        },
      }),
      providesTags: ["Product"],
      keepUnusedDataFor: 5,
    }),
    getMenProducts: builder.query({
      query: ({ pageNumber }) => ({
        url: "http://localhost:8000/api/products/men",
        params: {
          pageNumber,
        },
      }),
      providesTags: ["Product"],
      keepUnusedDataFor: 5,
    }),
    getKidsProducts: builder.query({
      query: ({ pageNumber }) => ({
        url: "http://localhost:8000/api/products/kids",
        params: {
          pageNumber,
        },
      }),
      providesTags: ["Product"],
      keepUnusedDataFor: 5,
    }),
    getTravelProducts: builder.query({
      query: ({ pageNumber }) => ({
        url: "http://localhost:8000/api/products/travel",
        params: {
          pageNumber,
        },
      }),
      providesTags: ["Product"],
      keepUnusedDataFor: 5,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductDetailsQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useUploadProductImageMutation,
  useUploadAllProductImageMutation,
  useDeleteProductMutation,
  useCreateReviewMutation,
  useGetNewArrivalQuery,
  useGetFeaturedProductsQuery,
  useGetTopProductsQuery,
  useGetSearchProductsQuery,
  useGetWomenProductsQuery,
  useGetMenProductsQuery,
  useGetKidsProductsQuery,
  useGetTravelProductsQuery,
} = productsApiSlice;
