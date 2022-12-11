import { createSlice } from "@reduxjs/toolkit";
import { Product } from "shared/api";

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
      delivery_date: "20-11-2023",
      currency: "cur1",
      volume: 3,
    },
    {
      id: "2",
      status: "archive",
      sum: 333,
      qty: 2,
      name: "prod2",
      delivery_date: "27-11-2023",
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

export const { reducer } = productModel;
