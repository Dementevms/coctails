import axios, { AxiosError, isAxiosError, type AxiosInstance } from "axios";

function createApiInstance(baseURL?: string): AxiosInstance {
  const instance = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return instance;
}

export const api = createApiInstance("https://www.thecocktaildb.com/api/json/");


export function isErrorAPI(
  response: unknown | AxiosError
): response is AxiosError {
  return isAxiosError(response);
}

// Endpoints

export * from "./v1";
