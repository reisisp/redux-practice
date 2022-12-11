import { List } from "antd";
import { productModel, ProductCard } from "entities/product";

import { ProductListHeader } from "./ui/product-list-header";

import styles from "./index.module.scss";

export const ProductList = () => {
  const { data } = productModel.getInitialState();
  return (
    <List size="large" header={<ProductListHeader />} footer={<div>footer</div>} bordered className={styles.list}>
      {data.map((el) => (
        <List.Item key={el.id} className={styles.list__item}>
          <ProductCard data={el} />
        </List.Item>
      ))}
    </List>
  );
};
