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
`;

export const ContainerLine = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 10px;
`;

export const Item = styled.line`
    color: ${colors.font.secondary};
    font-size: 30px;
    margin-right: 100px;
    font-weight: bold;
    @media screen and (max-width: 500px){
        font-size: 20px;
        margin-right: 55px;
    }
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