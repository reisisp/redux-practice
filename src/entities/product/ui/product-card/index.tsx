import { FC } from "react";

export const ProductCard: FC<{ data: any }> = ({ data }) => {
  return <div>{data.id}</div>;
};
