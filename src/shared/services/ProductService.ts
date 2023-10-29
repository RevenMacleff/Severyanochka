import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "src/shared/models/IProduct";

export const productAPI = createApi({
  reducerPath: "userAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://ebede7be76cd09ec.mokky.dev/" }),
  endpoints: (builder) => ({
    fetchAllPosts: builder.query<IProduct[], void>({
      query: () => ({
        url: "/severyanochka",
      }),
    }),
  }),
});
