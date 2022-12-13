import { Spin } from "antd";

import styles from "./index.module.scss";

export const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <Spin tip="Loading" size="large" />
    </div>
  );
};
