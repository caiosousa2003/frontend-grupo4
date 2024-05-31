import { styled } from 'styled-components';
import { colors } from "../../styles/sytlesVariables";

export const ContainerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Titulo = styled.h1`
    color: ${colors.font.title};
    font-size: 36px;
    font-weight: bold;
    padding-bottom: 20px;
    @media screen and (max-width: 500px){
        font-size: 24px;
        text-align: 'center';
    }
`;

export const ContainerList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
    width: 500px;
    @media screen and (max-width: 620px){
        width: 80%;
    }
`;

export const ContainerLine = styled.div`
    display: grid;
    align-items: center;
    margin: 10px;
    width: 100%;
`;

export const Item = styled.line`
    grid-column: 1 / 2;
    display: flex;
    justify-content: flex-start;
    color: ${colors.font.secondary};
    font-size: 30px;
    margin-right: 100px;
    font-weight: bold;
    text-align: left;
    @media screen and (max-width: 500px){
        font-size: 20px;
        margin-right: 55px;
    }
`;

export const DivIcons = styled.div`
    grid-column: 3 / 4;
    display: flex;
    justify-content: flex-end;
    flex-direction: row; 
`;

export const Icon = styled.img`
    cursor: pointer;
    width: 33px;
    height: 32px;
    margin-right: ${(props) => props.margin || "15px"};
    @media screen and (max-width: 500px){
        font-size: 20px;
        width: 23px;
        height: 22px;
    }
`;

export const DivModal = styled.div`
  background-color: #111;
  display: flex;
  justify-content: center;
  align-items: center;
`;