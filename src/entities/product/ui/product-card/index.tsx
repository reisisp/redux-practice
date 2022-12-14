import { FC } from "react";
import { Col, Row, Typography } from "antd";

import { CheckFilteredById } from "feature";
import { Product } from "shared/api";

import styles from "./index.module.scss";

const { Text } = Typography;

type ProductCardProps = {
  data: Product;
};

export const ProductCard: FC<ProductCardProps> = ({ data }) => {
  const { id, name, status, delivery_date, currency, volume, qty, sum } = data;

  const total = `${sum * qty} ${currency}`;
  return (
    <Row gutter={16} justify="space-between" className={styles.card}>
      <Col span={3}>
        <Text className={styles.card__text}>{name}</Text>
      </Col>
      <Col span={2}>
        <Text className={styles.card__text}>{status}</Text>
      </Col>
      <Col span={3}>
        <Text className={styles.card__text}>{delivery_date}</Text>
      </Col>
      <Col span={2} className={styles.card__el_centered}>
        <Text className={styles.card__text}>{currency}</Text>
      </Col>
      <Col span={2} className={styles.card__el_centered}>
        <Text className={styles.card__text}>{volume}</Text>
      </Col>
      <Col span={2} className={styles.card__el_centered}>
        <Text className={styles.card__text}>{qty}</Text>
      </Col>
      <Col span={2}>
        <Text className={styles.card__text}>{sum}</Text>
      </Col>
      <Col span={2}>
        <Text className={styles.card__text}>{total}</Text>
      </Col>
      <Col span={1} className={styles.card__el_centered}>
        <CheckFilteredById id={id} />
      </Col>
    </Row>
  );
};
