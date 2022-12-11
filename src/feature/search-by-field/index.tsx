import { Input, InputNumber, Select, Typography } from "antd";
import { useDispatch } from "react-redux";

import { setSearchFieldKey, useSearchFieldKey } from "entities/product";
import { ProductKeys } from "shared/api";

import { searchValues } from "./config";

import styles from "./index.module.scss";

const { Option } = Select;
const { Text } = Typography;

export const SearchByField = () => {
  const dispatch = useDispatch();
  const fieldKey = useSearchFieldKey();
  const changeVal = (val: ProductKeys) => {
    dispatch(setSearchFieldKey(val));
  };
  return (
    <Input.Group compact>
      <Select defaultValue={fieldKey} onChange={changeVal} className={styles.search__select}>
        {searchValues.map((el) => (
          <Option key={el.value} value={el.value}>
            <Text className={styles.search__text}>{el.displayName}</Text>
          </Option>
        ))}
      </Select>
      <Input style={{ width: "50%" }} defaultValue="" />
      <InputNumber />
    </Input.Group>
  );
};
