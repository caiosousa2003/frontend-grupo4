import { styled } from 'styled-components';

export const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vh;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: #222;
  border: transparent solid;
  border-radius: 20px;
`;

export const LinhaPrinc = styled.div`
  display: grid;
  grid-template-columns: 50% 20% 20% 10%;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #ffe712;
`;

export const ItensLista = styled.div`
  font-size: 16;
  color: Black;
  text-align: center;
  padding: 10px 0px;
  font-weight: bold;
  font-family: 'Arial';
`;

export const LinhaSessoes = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 50% 20% 20% 10%;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: #222;
`;

export const Botao = styled.button`
  &:hover {
    transform: scale(1.2);
  }
  background-color: transparent;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.5s;
`;

export const DivPrin = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #111;
  margin: 40px 0 150px 0;
`;
