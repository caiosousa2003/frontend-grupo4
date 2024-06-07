import { styled } from 'styled-components';
import { colors } from '../../styles/sytlesVariables';

export const TituloEditar = styled.h1`
  color: #ffe712;
  font-size: 48px;
  font-family: Arial;
  margin-bottom: 40px;
  @media (max-width: 600px) {
    font-size: 8vw;
  }
`;

export const ContainerPadrao = styled.div`
  width: 80%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0px;
`;

export const InputPadrao = styled.input`
  width: 80%;
  border: solid;
  border-color: #ffe712;
  border-radius: 10px;
  height: 30px;
`;
export const DivTlt = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const QuadradoCinza = styled.div`
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextoPadrao = styled.p`
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: #ffe712;
  margin-bottom: 10px;
  padding: 5px;
`;

export const Botao = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const BotaoPadrao = styled.button`
  width: 80%;
  height: auto;
  border: solid 2px yellow;
  border-radius: 15px;
  background-color: black;
  color: yellow;
  font-family: Arial;
  font-size: 24px;
  margin: 20px;
  cursor: pointer;
`;

export const DivPrincipal = styled.div`
  background-color: #000;
  margin: 0px;
  padding: 0px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
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
