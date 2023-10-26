import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "src/models/IProduct";

interface Products {
  products: IProduct[];
}
const initialState: Products = {
  products: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      // Обновите состояние products с данными из action
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
