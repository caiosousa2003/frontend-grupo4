import React, { children } from "react";
import { CloseBtn } from "./styleModal";
import { IoMdClose } from "react-icons/io";

function Modal({ isOpen, setOpenModal, children }) {
  const handleOk = () => {
    setOpenModal(false);
  };
  const handleCancel = () => {
    setOpenModal(false);
  };
  return (
    <Modal
      title="Basic Modal"
      open={isOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
}
export default Modal;
{
  /* <DivBackground>
          <DivModal>
            {children}
            <HeaderModal>
              <CloseBtn>
                <IoMdClose onClick={setModalOpen} />
              </CloseBtn>
              <Title>Confirmação de login</Title>
            </HeaderModal>
          </DivModal>
        </DivBackground> */
}
