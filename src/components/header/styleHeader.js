import { styled } from 'styled-components';

export const LogoCPE = styled.img`
  height: 80%;
  cursor: pointer;
`;

export const ContainerHeader = styled.header`
  background-color: yellow;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 400px) {
    height: 8vh;
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
  cursor: pointer;
`;

export const IconProjetos = styled.img`
  margin-left: auto;
  cursor: pointer;
`;

export const ContainerAdmin = styled.div`

`;

export const IconSair = styled.div`
  margin-left: auto;
  height: 90%;
  border-left: 3px solid black;
  cursor: pointer;
`;

export const IconEditar = styled.div`
  margin-left: auto;
  border-right: 2px;
  cursor: pointer;
`;

export const ContainerUsuarios = styled.div`
  border: 3px solid black;
  height: 80%;
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;
`;
