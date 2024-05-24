import { styled } from "styled-components";

export const DivPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;
  @media screen and (max-width: 400px) {
    height: 92vh;
  }
`;

export const TituloCadastro = styled.h1`
  color: yellow;
  font-size: 48px;
`;

export const Input = styled.input`
  border: ${(props) => (props?.error ? "1px solid red" : "1px solid black")};
`;
