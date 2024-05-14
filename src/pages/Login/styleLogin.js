import { styled } from "styled-components";

export const TextCadastro = styled.p`
  color: #F5F5F5;
  font-size: 17px;
`;

export const TextClicavel = styled.a`
  color: #FFE712;
  font-size: 17px;
  text-decoration: underline;
  cursor: pointer;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 90%;
  @media screen and (max-width: 400px) {
    height: 92vh;
  }
`