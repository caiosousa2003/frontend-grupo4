import { styled } from 'styled-components';
import { colors } from '../../styles/sytlesVariables';

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
  font-size: 36px;
  font-weight: bold;
  @media screen and (max-width: 400px) {
    font-size: 24px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerForm = styled.div`
  background-color: #313131;
  width: 800px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 0px 20px 0px;
  @media screen and (max-width: 800px) {
    width: 90vw;
  }
`;

export const Campo = styled.div`
  width: 85%;
  flex-direction: row;
  display: flex;
  align-items: top;
  @media screen and (max-width: 800px) {
  }
  @media screen and (max-width: 500px) {
  }
`;

export const Label = styled.label`
  color: ${colors.font.title};
  font-size: 24px;
  font-weight: bold;
  margin-top: 40px;
  margin-right: ${(props) => props.margin || '15px'};
  @media screen and (max-width: 400px) {
    font-size: 16px;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

export const InputDescricao = styled.textarea`
  border-radius: 20px;
  margin-top: ${(props) => props.margintop || '35px'};
  padding-left: 15px;
  box-sizing: border-box;
  resize: none;
  width: ${(props) => props.width || '44%'};
  height: ${(props) => props.height || '50px'};
  font-size: ${(props) => props.font || '20px'};
  @media screen and (max-width: 800px) {
  }
  @media screen and (max-width: 500px) {
  }
  &:focus {
    outline: none;
    border: 2px solid yellow;
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
