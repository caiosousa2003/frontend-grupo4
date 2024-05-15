import { styled } from 'styled-components';

export const LogoHeader = styled.img`
  @media screen and (max-width: 524px) {
    width: 40%;
  }
`;

export const HeaderPrincipal = styled.header`
  background-color: yellow;
  height: 100%;
  display: flex;
  align-items: center;
  @media screen and (max-width: 400px) {
    height: 8vh;
  }
`;

export const ReturnHeader = styled.img`
  margin-left: auto;
  cursor: pointer;
  @media screen and (max-width: 524px) {
    width: 20%;
  }
`;
