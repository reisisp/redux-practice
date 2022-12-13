import React, { useState, FC } from "react";
import { Button, Modal, Typography } from "antd";

import { ApplyModalProps } from "./config";

const { Text } = Typography;

export const ApplyModal: FC<ApplyModalProps> = ({ isActive, confirm, children, msgTitle, msgBody }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const onOkHandler = () => {
    confirm();
    setModalOpen(false);
  };

  const onCancel = () => setModalOpen(false);

  const onOpen = () => setModalOpen(true);

  return (
    <>
      <Button disabled={isActive} onClick={onOpen}>
        {children}
      </Button>
      <Modal
        title={msgTitle}
        centered
        open={modalOpen}
        onCancel={onCancel}
        footer={[
          <Button key="back" onClick={onCancel}>
            Отклонить
          </Button>,
          <Button key="submit" danger onClick={onOkHandler}>
            Применить
          </Button>,
        ]}
      >
        <Text>{msgBody}</Text>
      </Modal>
    </>
  );
};
