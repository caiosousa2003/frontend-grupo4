import { styled } from 'styled-components';
import { colors } from "../../styles/sytlesVariables";

export const ContainerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 400px) {
    padding: 12px;
  }
`;

export const Titulo = styled.h1`
    color: ${colors.font.title};
    font-size: 48px;
    font-weight: bold;
    @media screen and (max-width: 400px){
        font-size: 36px;
    }
`;

export const Form = styled.form`
    background-color: #313131;
    width: 60vw;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 0px 20px 0px;
`;

export const Campo = styled.div`
    width: 45vw;
`;

export const Label = styled.label`
    color: ${colors.font.title};
`;

export const ContainerButtons = styled.div`
`;