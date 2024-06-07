import { styled } from 'styled-components';

export const LogoCPE = styled.img`
  height: 80%;
  cursor: pointer;
`;

export const ContainerHeader = styled.header`
  background-color: yellow;
  height: 83px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 600px) {
    height: 67px;
  }
  @media screen and (max-width: 490px) {
    height: 56px;
  }
  @media screen and (max-width: 400px) {
    height: 44px;
  }
`;

export const ContainerIcons = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 80%;
`;

export const IconUsuarios = styled.img`
  margin-left: auto;
  height: 95%;
  margin-left: 15px;
  cursor: pointer;
  @media screen and (max-width: 400px) {
    margin-left: 7px;
  }
`;

export const IconProjetos = styled.img`
  margin-left: auto;
  height: 95%;
  cursor: pointer;
`;

export const ContainerAdmin = styled.div`
  height: 100%;
`;

export const IconSair = styled.div`
  display: flex;
  height: 90%;
  padding: 10px 7px 10px 12px;
  cursor: pointer;
  @media screen and (max-width: 480px) {
    padding: 7px 4px 7px 9px;
  }
  @media screen and (max-width: 400px) {
    padding: 5px 2px 5px 7px;
  }
`;

export const IconEditar = styled.div`
  display: flex;
  height: 80%;
  padding: 10px 15px 10px 15px;
  cursor: pointer;
  @media screen and (max-width: 480px) {
    padding: 7px 12px 7px 12px;
  }
  @media screen and (max-width: 400px) {
    padding: 5px 10px 5px 10px;
  }
`;

export const ContainerUsuarios = styled.div`
  display: flex;
  border: 3px solid black;
  height: 80%;
  border-radius: 10px;
  align-items: center;
  margin-left: 30px;
  margin-right: 20px;
  flex-direction: row;
  @media screen and (max-width: 480px) {
    border: 2px solid black;
    margin-left: 20px;
    margin-right: 15px;
  }
  @media screen and (max-width: 400px) {
    margin-left: 8px;
    margin-right: 5px;
  }
`;

export const Linha = styled.div`
  display: flex;
  top: 0;
  left: 50%;
  height: 100%;
  width: 3px;
  background-color: black;
  transform: translateX(-50%);
  @media screen and (max-width: 480px) {
    width: 2px;
  }
`;
