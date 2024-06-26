import { styled } from 'styled-components';

export const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: #222;
  margin: 15px 0 150px 0;
  border-radius: 10px;
  overflow: hidden;
  @media (max-width: 1150px) {
    width: 80%;
  }
`;

export const LinhaPrinc = styled.div`
  display: grid;
  grid-template-columns: 50% 20% 20% 10%;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #ffe712;
  margin: 0 0 10px 0;
`;

export const ItensLista = styled.div`
  font-size: 16;
  color: Black;
  text-align: center;
  padding: 10px 0px;
  font-weight: bold;
  font-family: 'Arial';
  @media (max-width: 1150px) {
    font-size: 14;
  }
  @media (max-width: 800px) {
    font-size: 11;
  }
  @media (max-width: 500px) {
    font-size: 8;
  }
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

export const ConteinerMembro = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: left;
  justify-content: left;
  background-color: #222;
  padding: 10px 0;
`;

export const ConteinerNomProj = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: left;
  background-color: #222;
  padding: 0 0 5px 0;
`;

export const Nome = styled.div`
  font-size: 12;
  color: White;
  text-align: right;
  padding: 0 0 0 10%;
  font-weight: bold;
  font-family: 'Arial';
  @media (max-width: 1150px) {
    font-size: 10;
  }
  @media (max-width: 800px) {
    font-size: 8;
    font-weight: bold;
  }
  @media (max-width: 500px) {
    font-size: 6;
  }
`;

export const Projeto = styled.div`
  font-size: 12;
  color: rgba(255, 255, 255, 0.4);
  text-align: left;
  padding: 0 0 0 5%;
  font-family: 'Arial';
  @media (max-width: 1150px) {
    font-size: 10;
  }
  @media (max-width: 800px) {
    font-size: 8;
  }
  @media (max-width: 600px) {
    font-size: 4;
  }
`;

export const Cargo = styled.div`
  font-size: 12;
  color: #ffe712;
  text-align: left;
  padding: 0 0 0 10%;
  font-family: 'Arial';
  @media (max-width: 1150px) {
    font-size: 10;
  }
  @media (max-width: 800px) {
    font-size: 8;
  }
  @media (max-width: 600px) {
    font-size: 4;
  }
`;
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Tempo = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #222;
  border: 2px solid #ffe712;
  border-radius: 4px;
  color: #ffe712;
  margin: auto;
  padding: 3px 7px;
  font-weight: bold;
  font-family: 'Arial';
  @media (max-width: 1150px) {
    font-size: 10;
  }
  @media (max-width: 800px) {
    font-size: 8;
  }
  @media (max-width: 600px) {
    font-size: 4;
  }
`;
