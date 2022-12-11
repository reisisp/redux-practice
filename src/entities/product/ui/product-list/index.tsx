import { List } from "antd";
import { productModel } from "entities/product/model";

import { ProductCard } from "../product-card";

export const ProductList = () => {
  const { data } = productModel.getInitialState();
  return (
    <List size="large" header={<div>header</div>} footer={<div>footer</div>} bordered>
      {data.map((el) => (
        <List.Item key={el.id}>
          <ProductCard data={el} />
        </List.Item>
      ))}
    </List>
  );
};
