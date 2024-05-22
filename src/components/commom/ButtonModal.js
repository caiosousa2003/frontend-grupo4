import { styled } from "styled-components";

export const ButtonModal = styled.button`
  border: 1px solid #262626;
  border-radius: 4px;
  background: transparent;
  padding: 4px 15px;
  font-weight: 400;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
  color: hsla(0, 0%, 100%, 0.85);
  font-size: 16px;
  height: 32px;

  &:hover {
    border: 1px solid yellow;
    color: yellow;
  }
`;
