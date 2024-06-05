import { styled } from 'styled-components';

export const TituloEditar = styled.h1`
  color: #ffe712;
  font-size: 48px;
  font-family: Arial;
  margin-bottom: 40px;
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

export const Form = styled.form`
  background-color: #313131;
  width: 40%;
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
  @media (max-width: 900px) {
    width: 80%;
  }
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
`;

export const BotaoPadrao = styled.button`
  width: auto;
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
