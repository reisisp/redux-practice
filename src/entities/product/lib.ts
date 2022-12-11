import type { Product, ProductKeysTypeNumber } from "shared/api";

export const getProductSumByKey = (data: Product[], key: ProductKeysTypeNumber) => {
  const initialVal = 0;
  return data.reduce((accumulator, el) => accumulator + el[key], initialVal);
};
