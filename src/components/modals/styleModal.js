import { Modal } from "antd";
import { styled } from "styled-components";

export const SelectModal = styled.select`
  border-radius: 0px;
  border: ${(props) =>
    props.hasError ? "1px solid red" : "1px solid #d9d9d9"};
  &:focus {
    border-color: ${(props) => (props.hasError ? "red" : "#40a9ff")};
  }
  &:hover {
    background-color: white;
  }
`;
export const OptionsModal = styled.option`
  border-radius: 0px;
  color: black;
  text-decoration: none;
  background-color: white;
  &:hover {
    background-color: white;
  }
`;
export const ModalStyle = styled(Modal)`
  .ant-modal-content {
    width: 80%;
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
  margin-bottom: 15px;
  border: 1px solid #fdd100;
  cursor: pointer;
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
  border: none;
  width: 250px;
  height: 30px;
  border: ${(props) => (props?.error ? "1px solid red" : "1px solid black")};
  padding-left: 10px;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
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
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
