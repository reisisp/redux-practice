import { Typography } from "antd";

import styles from "./index.module.scss";

const { Paragraph, Link } = Typography;

export const PageDoesNotExist = () => {
  return (
    <div className={styles["alert-box"]}>
      <Paragraph className={styles["alert-box__text"]}>Такой страницы не существует</Paragraph>
      <Link href="/" className={styles["alert-box__link"]}>
        На главную
      </Link>
    </div>
  );
};
