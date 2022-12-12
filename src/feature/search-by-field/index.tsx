import { Button, DatePicker, Form, Input, InputNumber, Select } from "antd";

import { useState } from "react";
import { useDispatch } from "react-redux";

import { setSearchFieldKey, setSearchQuery, useSearchFieldKey } from "entities/product";
import { ProductKeys } from "shared/api";

import { searchValues } from "./config";

import styles from "./index.module.scss";

import type { DatePickerProps, RangePickerProps } from "antd/es/date-picker";

const { Option } = Select;

export const SearchByField = () => {
  const [searchVal, setSearchVal] = useState("");
  const dispatch = useDispatch();
  const fieldKey = useSearchFieldKey();

  const changeVal = (val: ProductKeys) => {
    dispatch(setSearchFieldKey(val));
    dispatch(setSearchQuery(""));
    setSearchVal("");
  };

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e.target.value);
  };

  const onCompleteSearch = () => {
    dispatch(setSearchQuery(searchVal));
  };

  const onChangeDate = (
    _value: DatePickerProps["value"] | RangePickerProps["value"],
    dateString: [string, string] | string
  ) => {
    dispatch(setSearchQuery(JSON.stringify(dateString)));
  };

  const onFinishWithNumbers = (val: { min: number | undefined; max: number | undefined }) => {
    const min = val.min === undefined ? 0 : val.min;
    const max = val.max === undefined ? 0 : val.max;
    const arr = [min, max];
    dispatch(setSearchQuery(JSON.stringify(arr)));
  };

  return (
    <Input.Group compact style={{ width: "100%" }}>
      <Select defaultValue={fieldKey} onChange={changeVal} className={styles.search__select}>
        {searchValues.map((el) => (
          <Option key={el.value} value={el.value} style={{ color: "var(--text-primary)" }}>
            {el.displayName}
          </Option>
        ))}
      </Select>
      {(fieldKey === "name" || fieldKey === "status" || fieldKey === "currency") && (
        <Input
          style={{ width: "92%" }}
          value={searchVal}
          onChange={onChangeSearch}
          autoFocus
          onPressEnter={onCompleteSearch}
        />
      )}
      {fieldKey === "delivery_date" && <DatePicker.RangePicker style={{ width: "92%" }} onChange={onChangeDate} />}
      {(fieldKey === "qty" || fieldKey === "sum" || fieldKey === "volume") && (
        <Form name="complex-form" onFinish={onFinishWithNumbers}>
          <Form.Item style={{ margin: 0 }}>
            <Input.Group compact style={{ width: "92%", display: "flex" }}>
              <Form.Item name="min" style={{ margin: 0 }}>
                <InputNumber min={0} style={{ width: 100, textAlign: "center" }} placeholder="Minimum" />
              </Form.Item>
              <Form.Item style={{ margin: 0 }}>
                <Input
                  className="site-input-split"
                  style={{
                    width: 30,
                    borderLeft: 0,
                    borderRight: 0,
                    pointerEvents: "none",
                  }}
                  placeholder="~"
                  disabled
                />
              </Form.Item>
              <Form.Item name="max" style={{ margin: 0 }}>
                <InputNumber
                  min={0}
                  className="site-input-right"
                  style={{
                    width: 100,
                    textAlign: "center",
                  }}
                  placeholder="Maximum"
                />
              </Form.Item>
            </Input.Group>
          </Form.Item>
          <Form.Item label=" " colon={false} hidden>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      )}
    </Input.Group>
  );
};
