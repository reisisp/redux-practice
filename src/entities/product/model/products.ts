import { createAsyncThunk, createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { Product, ProductKeys, ProductKeysTypeNumber } from "shared/api";

export const initialState: {
  data: Product[];
  searchFieldKey: ProductKeys;
  searchQuery: string;
  checkedArr: string[];
  loading: boolean;
  isErr: boolean;
  errMsg: string | undefined;
} = {
  data: [],
  searchFieldKey: "name",
  searchQuery: "",
  checkedArr: [],
  loading: false,
  isErr: false,
  errMsg: "",
};

export const fetchData = createAsyncThunk<Product[], string, { rejectValue: string }>(
  "products/fetchData",
  async function (endpoint, { rejectWithValue }) {
    try {
      const res = await fetch(`https://site/endpoint/${endpoint}`);
      if (!res.ok) {
        return rejectWithValue(`${endpoint} server err`);
      }
      const data = await res.json();
      return data;
    } catch (e) {
      return rejectWithValue(`${endpoint} server err`);
    }
  }
);

export const cancelChoosed = createAsyncThunk<any, string[], { rejectValue: string }>(
  "products/cancelChoosed",
  async function (arr, { rejectWithValue }) {
    try {
      const res = await fetch("https://site/endpoint/cancel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(arr),
      });

      if (!res.ok) {
        return rejectWithValue("/cancel server err");
      }
      return arr;
    } catch (e) {
      return rejectWithValue("/cancel server err");
    }
  }
);

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
  extraReducers(builder) {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.isErr = false;
        state.errMsg = "";
      })
      .addCase(fetchData.fulfilled, (state, { payload }) => {
        state.data = [...state.data, ...payload];
        state.loading = false;
        state.isErr = false;
        state.errMsg = "";
      })
      .addCase(fetchData.rejected, (state, { payload }) => {
        state.loading = false;
        state.isErr = true;
        state.errMsg = payload;
      })
      .addCase(cancelChoosed.pending, (state) => {
        state.loading = true;
        state.isErr = false;
      })
      .addCase(cancelChoosed.fulfilled, (state, { payload }) => {
        state.data = state.data.filter((el) => payload.indexOf(el.id) !== -1);
        state.loading = false;
        state.isErr = false;
      })
      .addCase(cancelChoosed.rejected, (state) => {
        state.loading = false;
      });
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

export const getCheckedProductsName = () =>
  useSelector(
    createSelector(
      (state: RootState) => state.products.checkedArr,
      (state: RootState) => state.products.data,
      (checkedArr, data) =>
        data.reduce((namesArr: string[], el) => {
          if (checkedArr.indexOf(el.id) !== -1) namesArr.push(el.name);
          return namesArr;
        }, [])
    )
  );

export const { reducer } = productModel;
