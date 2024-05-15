import { apiSlice } from "./apiSlice";

export const wishListApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getWishList: builder.query({
      query: () => ({
        url: "http://localhost:8000/api/wishlist",
      }),
      providesTags: ["WishList"],
      keepUnusedDataFor: 5,
    }),
    addProductToWishList: builder.mutation({
      query: (productData) => ({
        url: "http://localhost:8000/api/wishlist/add",
        method: "POST",
        body: productData,
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["WishList"],
    }),
    removeProductFromWishList: builder.mutation({
      query: (productId) => ({
        url: `http://localhost:8000/api/wishlist/${productId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["WishList"],
    }),
  }),
});

export const {
  useGetWishListQuery,
  useAddProductToWishListMutation,
  useRemoveProductFromWishListMutation,
} = wishListApiSlice;
