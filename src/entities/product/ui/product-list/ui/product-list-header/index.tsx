import { Col, Row, Typography } from "antd";

import styles from "./index.module.scss";

const { Text } = Typography;

export const ProductListHeader = () => {
  return (
    <Row gutter={16} justify="space-between" className={styles.header}>
      <Col span={2}>
        <Text className={styles.header__text}>Наименование</Text>
      </Col>
      <Col span={2}>
        <Text className={styles.header__text}>Статус</Text>
      </Col>
      <Col span={2}>
        <Text className={styles.header__text}>Дата&nbsp;доставки</Text>
      </Col>
      <Col span={2}>
        <Text className={styles.header__text}>Валюта</Text>
      </Col>
      <Col span={2}>
        <Text className={styles.header__text}>Объём</Text>
      </Col>
      <Col span={2}>
        <Text className={styles.header__text}>Колличество</Text>
      </Col>
      <Col span={2}>
        <Text className={styles.header__text}>Сумма</Text>
      </Col>
      <Col span={2}>
        <Text className={styles.header__text}>Всего</Text>
      </Col>
    </Row>
  );
};
