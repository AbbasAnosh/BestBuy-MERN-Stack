import { apiSlice } from "./apiSlice";
export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: "http://localhost:8000/api/products",
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
  }),
});

export const {
  useGetProductsQuery,
  useGetProductDetailsQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useUploadProductImageMutation,
  useUploadAllProductImageMutation,
} = productsApiSlice;
