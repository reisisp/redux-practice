import { FC } from "react";
import { Col, Row } from "antd/es/grid";
import { Product } from "shared/api";

import styles from "./index.module.scss";

type ProductCardProps = {
  data: Product;
};

export const ProductCard: FC<ProductCardProps> = ({ data }) => {
  return (
    <Row gutter={16} justify="space-between" className={styles.card}>
      <Col span={2}>{data.name}</Col>
      <Col span={2}>{data.status}</Col>
      <Col span={2}>{data.delivery_date}</Col>
      <Col span={2}>{data.currency}</Col>
      <Col span={2}>{data.volume}</Col>
      <Col span={2}>{data.qty}</Col>
      <Col span={2}>{data.sum}</Col>
      <Col span={2}>123</Col>
    </Row>
  );
};
