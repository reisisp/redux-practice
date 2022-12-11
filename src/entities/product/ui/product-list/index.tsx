import { List } from "antd";
import { productModel } from "entities/product/model";

import { ProductCard } from "../product-card";

import styles from "./index.module.scss";

export const ProductList = () => {
  const { data } = productModel.getInitialState();
  return (
    <List size="large" header={<div>header</div>} footer={<div>footer</div>} bordered className={styles.list}>
      {data.map((el) => (
        <List.Item key={el.id} className={styles.list__item}>
          <ProductCard data={el} />
        </List.Item>
      ))}
    </List>
  );
};
