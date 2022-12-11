import { createSelector, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { Product, ProductKeysTypeNumber } from "shared/api";

export const initialState: {
  data: Product[];
} = {
  data: [
    {
      id: "1",
      status: "active",
      sum: 555,
      qty: 38,
      name: "prod1",
      delivery_date: "2020-05-12",
      currency: "cur1",
      volume: 3,
    },
    {
      id: "2",
      status: "archive",
      sum: 333,
      qty: 2,
      name: "prod2",
      delivery_date: "2020-05-11",
      currency: "cur2",
      volume: 7,
    },
  ],
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
