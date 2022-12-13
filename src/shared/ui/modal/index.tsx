import React, { useState, FC } from "react";
import { Button, Modal } from "antd";

import { ApplyModalProps } from "./config";

export const ApplyModal: FC<ApplyModalProps> = ({ isActive, confirm, children, msg }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const onOkHandler = () => {
    confirm();
    setModalOpen(false);
  };

  return (
    <>
      <Button disabled={isActive} onClick={() => setModalOpen(true)}>
        {children}
      </Button>
      <Modal
        title={msg}
        centered
        open={modalOpen}
        onOk={onOkHandler}
        onCancel={() => setModalOpen(false)}
        okButtonProps={{ danger: true }}
      />
    </>
  );
};
