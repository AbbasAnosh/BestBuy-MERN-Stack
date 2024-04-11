import { apiSlice } from "./apiSlice";
export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "http://localhost:8000/api/users/auth",
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "http://localhost:8000/api/users/logout",
        method: "POST",
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: "http://localhost:8000/api/users",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useRegisterMutation } =
  usersApiSlice;
