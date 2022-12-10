import { createSlice } from "@reduxjs/toolkit";

export const initialState: {
  data: { id: string }[];
} = {
  data: [{ id: "1" }],
};

export const productModel = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export const { reducer } = productModel;
