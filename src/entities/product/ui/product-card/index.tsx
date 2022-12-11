import { FC } from "react";
import { Col, Row } from "antd/es/grid";
import { Product } from "shared/api";

import styles from "./index.module.scss";

type ProductCardProps = {
  data: Product;
};

export const ProductCard: FC<ProductCardProps> = ({ data }) => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { name, status, delivery_date, currency, volume, qty, sum } = data;
  const total = `${sum * qty} ${currency}`;
  return (
    <Row gutter={16} justify="space-between" className={styles.card}>
      <Col span={2}>{name}</Col>
      <Col span={2}>{status}</Col>
      <Col span={2}>{delivery_date}</Col>
      <Col span={2}>{currency}</Col>
      <Col span={2}>{volume}</Col>
      <Col span={2}>{qty}</Col>
      <Col span={2}>{sum}</Col>
      <Col span={2}>{total}</Col>
    </Row>
  );
};
