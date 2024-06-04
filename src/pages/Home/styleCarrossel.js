import { styled } from "styled-components";

export const DivPrin = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #111;
`;

export const DivConteiner = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivImagem = styled.div`
  margin: 0px 40px;
  height: 100%;
`;

export const ImgCarrossel = styled.img`
  height: 100%;
  width: 100%;
  margin: 0px;
  padding: 0px;
  border-radius: 10px;
  @media (max-width: 795px) {
    height: 100%;
    margin: 0px;
    padding: 0px;
    border-radius: 7px;
  }
  @media (max-width: 610px) {
    height: 100%;
    margin: 0px;
    padding: 0px;
    border-radius: 5px;
  }
`;

export const Botoes = styled.button`
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

export const ConteinerBolinhas = styled.div`
  display: flex;
  justify-content: center;
  align-items: top;
`;

export const Bola = styled.span`
  padding: 10px;
  @media (max-width: 795px) {
    padding: 7px;
  }
  @media (max-width: 610px) {
    padding: 5px;
  }
`;
