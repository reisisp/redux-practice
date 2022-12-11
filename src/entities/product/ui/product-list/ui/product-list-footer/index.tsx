import { Row, Col, Typography } from "antd";

import styles from "./index.module.scss";

const { Text } = Typography;

export const ProductListFooter = () => {
  return (
    <Row gutter={16} className={styles.footer}>
      <Col>
        <Text className={styles.footer__text}>Общий&nbsp;обьем: 0</Text>
      </Col>
      <Col>
        <Text className={styles.footer__text}>Общее&nbsp;количество: 0</Text>
      </Col>
    </Row>
  );
};
