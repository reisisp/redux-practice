import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { Product, ProductKeys, ProductKeysTypeNumber } from "shared/api";

import { tempArr } from "./temp";

export const initialState: {
  data: Product[];
  searchFieldKey: ProductKeys;
  searchQuery: string;
} = {
  data: tempArr,
  searchFieldKey: "name",
  searchQuery: "",
};

export const productModel = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearchFieldKey: (state, { payload: searchFieldKeyVal }: PayloadAction<ProductKeys>) => {
      state.searchFieldKey = searchFieldKeyVal;
    },
    setSearchQuery: (state, { payload: setSearchQueryVal }: PayloadAction<string>) => {
      state.searchQuery = setSearchQueryVal;
    },
  },
});

export const { setSearchFieldKey, setSearchQuery } = productModel.actions;

export const useAllProducts = () =>
  useSelector(
    createSelector(
      (state: RootState) => state.products,
      ({ data, searchQuery, searchFieldKey }) => {
        if (!searchQuery.trim().length) return data;
        if (searchFieldKey === "delivery_date") {
          const dateArr = JSON.parse(searchQuery);
          return data.filter(
            (el) =>
              Date.parse(el.delivery_date) >= Date.parse(dateArr[0]) &&
              Date.parse(el.delivery_date) <= Date.parse(dateArr[1]) &&
              el
          );
        }
        if (searchFieldKey === "qty" || searchFieldKey === "sum" || searchFieldKey === "volume") {
          const dateArr = JSON.parse(searchQuery);
          return data.filter((el) => el[searchFieldKey] >= +dateArr[0] && el[searchFieldKey] <= +dateArr[1] && el);
        }
        return data.filter(
          (el) => el[searchFieldKey].toString().toLowerCase().trim().includes(searchQuery.toLowerCase().trim()) && el
        );
      }
    )
  );

export const useProductsSumByKey = (key: ProductKeysTypeNumber) =>
  useAllProducts().reduce((accumulator, el) => accumulator + el[key], 0);

export const useSearchFieldKey = () =>
  useSelector(
    createSelector(
      (state: RootState) => state.products.searchFieldKey,
      (searchFieldKey) => searchFieldKey
    )
  );

export const useSearchQuery = () =>
  useSelector(
    createSelector(
      (state: RootState) => state.products.searchQuery,
      (searchQuery) => searchQuery
    )
  );

export const { reducer } = productModel;
