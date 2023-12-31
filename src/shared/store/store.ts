import { combineReducers, configureStore } from "@reduxjs/toolkit";

import product from "src/shared/store/FilterSlice";
import { productAPI } from "src/shared/services/ProductService";
const rootReducer = combineReducers({
  product,
  [productAPI.reducerPath]: productAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
