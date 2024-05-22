import { styled } from 'styled-components';

export const ButtonDefault = styled.button`
  border-radius: 15px;
  width: 300px;
  height: 50px;
  margin-top: ${(props) => props.marginTop || "60px"};
  background-color: yellow;
  font-size: 32px;
  color: black;
  border: none;
  cursor: pointer;
  @media screen and (max-width: 620px) {
    width: 273px;
  }
  @media screen and (max-width: 450px) {
    width: 200px;
  }
  &:hover {
    opacity: 0.9;
  }
`;
