import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "@shared/constants/common";
import type { Cocktail } from "@shared/types/common";

export const cocktailsApi = createApi({
  reducerPath: "cocktails",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getCocktails: builder.query<{ drinks: Array<Cocktail> }, string>({
      query: (code) => {
        return {
          url: "v1/1/search.php",
          params: { s: code },
        };
      },
    }),
  }),
});

export const { useGetCocktailsQuery } = cocktailsApi;
