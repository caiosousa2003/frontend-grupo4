import { styled } from 'styled-components';

export const DivEditar = styled.div`
    height:60%;
    margin-top: 3%;
    margin-bottom: 7%; 
    justify-content:center;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color:#FFE712;
    font-size: 220%;
    text-align: center;
`;

export const ContainerPadrao = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 32%;
  margin-right: 32%;
`;

export const InputPadrao = styled.input`
  width: 80%;
  border:solid;
  border-color:#FFE712;
  border-radius: 10px;
  height:30px;
  margin-bottom: 1%; 
  margin-left: 2%;
  margin-right: 2%;
  margin-top: 20px;
`;

export const InputStatus = styled.input`
  width: 80%;
  border:solid;
  border-color:#FFE712;
  border-radius: 10px;
  height:60px;
  margin-bottom: 1%; 
  margin-left: 2%;
  margin-right: 2%;
  margin-top: 20px;
`;

export const QuadradoCinza = styled.div`
  position: absolute;
  top: 100px;
  left: 20%; 
  width: 38%;
  height: 29%;
  margin-left: 10%;
  margin-top: 11%;
  margin-bottom: 2%;
  background-color: rgb(59, 59, 59); 
  border-radius: 10px;
  z-index: -1; 
`;

export const TextoPadrao = styled.p`
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: #FFE712;
  margin-bottom: 10px; 
`;

export const Botao = styled.div`
  display:flex;
  justify-content: center;
  margin-top: 15%;
`;

export const BotaoPadrao = styled.button`
  width: 15%;
  height: 10%;
  border: solid;
  border-radius: 15px;
  background-color: #FFE712;
  color:black;
  font-family: fantasy;
  font-size: 200%;
  margin-right: 5%;
  margin-top: 20px;
`;

export const DivPrincipal = styled.div`
  background-color:#000; 
  margin: 0; 
  padding: 0;
`;
