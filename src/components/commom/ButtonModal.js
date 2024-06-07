import { styled } from 'styled-components';

export const ButtonModal = styled.button`
  border: 2px solid yellow;
  border-radius: 7px;
  background: transparent;
  padding: 4px 15px;
  font-weight: 300;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
  color: #ffe712;
  font-size: 16px;
  height: 32px;

  &:hover {
    font-weight: 400;
    color: yellow;
    transform: scale(1.05);
    cursor: pointer;
  }
`;
