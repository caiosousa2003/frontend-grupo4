import { styled } from "styled-components";

export const DivBackground = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  color: white;
  zindex: 1000;
  background-color: rgb(0, 0, 0, 0.7);
`;

export const DivModal = styled.div`
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 300px;
  background-color: #111;
`;
