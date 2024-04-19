import { apiSlice } from "./apiSlice";

export const ordersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (order) => ({
        url: "http://localhost:8000/api/orders",
        method: "POST",
        body: { ...order },
      }),
    }),
  }),
});

export const { useCreateOrderMutation } = ordersApiSlice;
