import { styled } from "styled-components";
import { colors } from "../../styles/sytlesVariables";

export const Titulo = styled.h1`
  color: ${colors.font.title};
  font-size: 48px;
  font-weight: bold;
  @media screen and (max-width: 400px){
    font-size: 36px;
  }
`

export const DivPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;
  @media screen and (max-width: 400px) {
    height: 92vh;
    padding: 12px;
  }
`;

export const TextCadastro = styled.p`
  color: ${colors.font.secondary};
  font-size: 17px;
  text-align: center;
`;

export const TextClicavel = styled.a`
  color: ${colors.font.title};
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

export const Alert = styled.p`
  color: ${colors.font.secondary};
  text-transform: uppercase;
  text-decoration: solid;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 2px;
  text-align: left;
  width: 43%;
`