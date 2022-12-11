import { createSelector, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { Product, ProductKeysTypeNumber } from "shared/api";

import { tempArr } from "./temp";

export const initialState: {
  data: Product[];
} = {
  data: tempArr,
};

export const productModel = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export const useAllProducts = () =>
  useSelector(
    createSelector(
      (state: RootState) => state.products.data,
      (products) => products
    )
  );

export const useProductsSumByKey = (key: ProductKeysTypeNumber) =>
  useSelector(
    createSelector(
      (state: RootState) => state.products.data,
      (products) => products.reduce((accumulator, el) => accumulator + el[key], 0)
    )
  );

export const { reducer } = productModel;
