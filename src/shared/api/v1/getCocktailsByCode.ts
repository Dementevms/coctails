import { AxiosError } from "axios";

import { api } from "@shared/api";
import type { Cocktail } from "@shared/types/common";

export type GetCocktailsByCodeResponse = {
  drinks: Array<Cocktail>;
};

export type GetCocktailsByCodeResponses =
  | GetCocktailsByCodeResponse
  | AxiosError;

export const getCocktailsByCode = async (
  code: string
): Promise<GetCocktailsByCodeResponses> => {
  const url = `v1/1/search.php?s=${code}`;
  const response = await api.get(url).catch((error: AxiosError) => {
    return { data: error };
  });

  return response.data;
};