import { List } from "antd";
import { ProductCard, useAllTasks } from "entities/product";

import { ProductListHeader, ProductListFooter } from "./ui";

import styles from "./index.module.scss";

export const ProductList = () => {
  const data = useAllTasks();
  return (
    <List size="large" header={<ProductListHeader />} footer={<ProductListFooter />} bordered className={styles.list}>
      {data.map((el) => (
        <List.Item key={el.id} className={styles.list__item}>
          <ProductCard data={el} />
        </List.Item>
      ))}
    </List>
  );
};
