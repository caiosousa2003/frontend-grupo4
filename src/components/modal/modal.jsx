import { Modal } from "antd";
import { InputDefault } from "../commom/InputDefault";
import {
  ModalStyle,
  ModalBtn,
  GlobalDiv,
  ModalTlt,
  InputTlt,
  InputModal,
} from "./styleModal";

export default function modal({ isModalOpen, setIsModalOpen }) {
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <ModalStyle
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <GlobalDiv>
          <ModalTlt>Iniciar sessão</ModalTlt>
          <div>
            <InputTlt>Digite o projeto</InputTlt>
            <InputModal placeholder="Nome"></InputModal>
          </div>
          <ModalBtn>SALVAR</ModalBtn>
        </GlobalDiv>
      </ModalStyle>
    </>
  );
}
