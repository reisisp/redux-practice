import { FC } from "react";

import styles from "./index.module.scss";

export const CenteredContainer: FC<{ children: JSX.Element[] | JSX.Element }> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
