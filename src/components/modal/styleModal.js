import { styled } from "styled-components";

export const DivBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.7);
  position: fixed;
  display: flex;
  justify-content: center;
  z-index: 1000;
`;

export const DivModal = styled.div`
  width: 500px;
  height: 500px;
  background-color: #111;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
export const CloseBtn = styled.div`
  font-style: normal;
  line-height: 40px;
  text-align: center;
  color: white;
  cursor: pointer;
  float: right;
`;
export const Title = styled.h1`
  font-size: 14px;
  color: white;
  padding-left: 1 0px;
`;
export const HeaderModal = styled.header`
  padding: 10px 24px;
  color: hsla(0, 0%, 100%, 0.85);
  background: #1f1f1f;
  border-bottom: 1px solid #0f00;
`;
