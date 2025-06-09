import { configureStore } from "@reduxjs/toolkit";
import { cocktailsApi } from "./cocktails/query";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [cocktailsApi.reducerPath]: cocktailsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cocktailsApi.middleware),
});

setupListeners(store.dispatch)