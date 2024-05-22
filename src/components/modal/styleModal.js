import { Modal } from "antd";
import { styled } from "styled-components";

export const ModalStyle = styled(Modal)`
  .ant-modal-content {
    @media screen and (max-width: 578px) {
      width: 80%;
    }
    @media screen and (max-width: 420px) {
      width: 80%;
    }
    @media screen and (max-width: 340px) {
      width: 70%;
    }
    @media screen and (max-width: 300px) {
      width: 60%;
    }
  }

  .ant-modal-close {
    color: black;
    &:hover {
      color: black;
      background: transparent;
    }
  }
`;
export const ModalBtn = styled.button`
  width: 200px;
  font-size: 18px;
  height: 30px;
  background: transparent;
  border-radius: 12px;
  color: #fdd100;
  white-space: nowrap;
  margin-top: 20px;
  border: 1px solid #fdd100;
  cursor: pointer;

  @media screen and (max-width: 300px) {
    width: 80%;
  }
  @media screen and (max-width: 300px) {
    width: 50%;
    font-size: 12px;
  }
`;
export const GlobalDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ModalTlt = styled.h1`
  color: black;
  font-weight: 10px;
  white-space: nowrap;
  @media screen and (max-width: 300px) {
    font-size: 15px;
  }
`;
export const InputTlt = styled.h1`
  color: black;
  font-size: 10px;
  margin: 0; /* Remove as margens */
  padding: 0; /* Remove qualquer padding */
  display: block;
`;
export const InputModal = styled.input`
  font-size: 12px;
  width: 250px;
  height: 30px;
  padding-left: 10px;
  border-radius: 5px;
  @media screen and (max-width: 450px) {
    width: 100%;
  }
  @media screen and (max-width: 300px) {
    width: 80%;
  }
  @media screen and (max-width: 300px) {
    width: 70%;
  }
`;
