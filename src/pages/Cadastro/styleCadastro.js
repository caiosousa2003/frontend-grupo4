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
`
