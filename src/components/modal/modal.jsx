import React, { children } from "react";
import { DivBackground, DivModal } from "./styleModal";
import { IoMdClose } from "react-icons/io";

function Modal({ isOpen, setModalOpen, children }) {
  if (isOpen) {
    return (
      <div>
        <DivBackground>
          <DivModal>{children}</DivModal>
          <IoMdClose onClick={setModalOpen} />
        </DivBackground>
      </div>
    );
  }
  return null;
}
export default Modal;
