import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { Product, ProductKeys, ProductKeysTypeNumber } from "shared/api";

import { tempArr } from "./temp";

export const initialState: {
  data: Product[];
  searchField: ProductKeys;
} = {
  data: tempArr,
  searchField: "name",
};

export const productModel = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearchFieldKey: (state, { payload: searchFieldVal }: PayloadAction<ProductKeys>) => {
      state.searchField = searchFieldVal;
    },
  },
});

export const { setSearchFieldKey } = productModel.actions;

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

export const useSearchFieldKey = () =>
  useSelector(
    createSelector(
      (state: RootState) => state.products.searchField,
      (searchField) => searchField
    )
  );

export const { reducer } = productModel;
