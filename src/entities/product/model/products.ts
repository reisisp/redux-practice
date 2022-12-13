import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { Product, ProductKeys, ProductKeysTypeNumber } from "shared/api";

import { tempArr } from "./temp";

export const initialState: {
  data: Product[];
  searchFieldKey: ProductKeys;
  searchQuery: string;
  checkedArr: string[];
} = {
  data: tempArr,
  searchFieldKey: "name",
  searchQuery: "",
  checkedArr: [],
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
    setAllFilteredChecked: (state, { payload: arr }: PayloadAction<string[]>) => {
      const prepareArr: string[] = arr.filter((el) => state.checkedArr.indexOf(el) === -1);
      state.checkedArr = [...state.checkedArr, ...prepareArr];
    },
    setAllFilteredUnChecked: (state, { payload: arr }: PayloadAction<string[]>) => {
      state.checkedArr = state.checkedArr.filter((el) => arr.indexOf(el) === -1);
    },
    setToggleCheckedById: (state, { payload: key }: PayloadAction<string>) => {
      const index = state.checkedArr.indexOf(key);
      if (index === -1) {
        state.checkedArr = [...state.checkedArr, key];
      } else {
        state.checkedArr = [
          ...state.checkedArr.slice(0, index),
          ...state.checkedArr.slice(index + 1, state.checkedArr.length + 1),
        ];
      }
    },
  },
});

export const {
  setSearchFieldKey,
  setSearchQuery,
  setAllFilteredChecked,
  setAllFilteredUnChecked,
  setToggleCheckedById,
} = productModel.actions;

export const useFiltredProducts = () =>
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
  useFiltredProducts().reduce((accumulator, el) => accumulator + el[key], 0);

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

export const useCheckedItems = () =>
  useSelector(
    createSelector(
      (state: RootState) => state.products.checkedArr,
      (checkedArr) => checkedArr
    )
  );

export const isProductItemChecked = (key: string): boolean =>
  useSelector(
    createSelector(
      (state: RootState) => state.products.checkedArr,
      (checkedArr) => checkedArr.indexOf(key) !== -1
    )
  );

export const isFilteredProductsChecked = () =>
  useSelector(
    createSelector(
      (state: RootState) => state.products.checkedArr,
      (checkedArr) => {
        const filteredProducts = useFiltredProducts();
        const idArr = Array.from(new Set(filteredProducts.map((el) => checkedArr.indexOf(el.id) !== -1)));
        if (idArr.length === 1 && idArr[0]) return true;
        return false;
      }
    )
  );

export const { reducer } = productModel;
