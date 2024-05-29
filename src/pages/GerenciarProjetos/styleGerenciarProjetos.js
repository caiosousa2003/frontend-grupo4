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
    @media screen and (max-width: 500px){
        font-size: 24px;
        text-align: 'center';
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ContainerForm = styled.div`
    background-color: #313131;
    width: 60vw;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 0px 20px 0px;
    @media screen and (max-width: 800px) {
        width: 75vw;
    }
    @media screen and (max-width: 500px) {
        width: 92vw;
    }
`;

export const Campo = styled.div`
    width: 85%;
    flex-direction: row;
    display:flex;
    align-items: top;
    @media screen and (max-width: 800px) {
        width: 90%;
    }
    @media screen and (max-width: 500px) {
        width: 95%;
    }
`;

export const Label = styled.label`
    color: ${colors.font.title};
    font-size: 24px;
    font-weight: bold;
    margin-top: 40px;
    margin-right: ${(props) => props.margin || "15px"};
    @media screen and (max-width: 500px){
        font-size: 16px;
    }
`;

export const InputDescricao = styled.textarea`
    border-radius: 20px;
    margin-top: ${(props) => props.margintop || "35px"};
    padding-left: 15px;
    box-sizing: border-box;
    resize: none;
    width: ${(props) => props.width || "44%"};
    height: ${(props) => props.height || "50px"};
    font-size: ${(props) => props.font || "20px"};
    @media screen and (max-width: 800px) {
        width: 60%;
    }
    @media screen and (max-width: 500px) {
        width: 80%;
        height: 100px;
        font-size: 14px;
    }
    &:focus {
        outline: none;
        border: 2px solid yellow;
    }
`

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