import { List } from "antd";
import { ProductCard, useAllProducts } from "entities/product";

import { ProductListHeader, ProductListFooter } from "./ui";

import styles from "./index.module.scss";

export const ProductList = () => {
  const data = useAllProducts();
  const sorted = [...data].sort((a, b) => (Date.parse(a.delivery_date) > Date.parse(b.delivery_date) ? 1 : -1));
  return (
    <List size="large" header={<ProductListHeader />} footer={<ProductListFooter />} bordered className={styles.list}>
      {sorted.map((el) => (
        <List.Item key={el.id} className={styles.list__item}>
          <ProductCard data={el} />
        </List.Item>
      ))}
    </List>
  );
};
