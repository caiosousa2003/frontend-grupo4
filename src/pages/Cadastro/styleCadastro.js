import { styled } from "styled-components";
import { colors } from "../../styles/sytlesVariables";

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
  @media screen and (max-width: 400px) {
    font-size: 40px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 90%;
  padding-bottom: 15px;
  @media screen and (max-width: 400px) {
    height: 92vh;
  }
`;

export const Alert = styled.p`
  color: ${colors.font.secondary};
  text-transform: uppercase;
  text-decoration: solid;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 2px;
  text-align: left;
  width: 43%;
`;
