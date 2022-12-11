import { Row, Col, Typography } from "antd";
import { useProductsSumByKey } from "entities/product";

import styles from "./index.module.scss";

const { Text } = Typography;

export const ProductListFooter = () => {
  const totalQty = useProductsSumByKey("qty");
  const totalVolume = useProductsSumByKey("volume");

  return (
    <Row gutter={16} className={styles.footer}>
      <Col>
        <Text className={styles.footer__text}>Общий&nbsp;обьем: {totalVolume}</Text>
      </Col>
      <Col>
        <Text className={styles.footer__text}>Общее&nbsp;количество: {totalQty}</Text>
      </Col>
    </Row>
  );
};
