import { styled } from "styled-components"

export const DivPrincipal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 90vh;
    @media screen and (max-width: 400px){
        height: 92vh;
    }
`
export const LogoHeader = styled.img`
    @media screen and (max-width: 524px){
        width: 40%;
    }
`
export const ReturnHeader = styled.img`
    float: right;
    @media screen and (max-width: 524px){
        width: 20%;
    }
`
export const HeaderPrincipal = styled.header`
    background-color: yellow;
    height: 10vh;
    @media screen and (max-width: 400px){
        height: 8vh;
    }
`

export const TituloCadastro = styled.h1`
    color: yellow;
    font-size: 48px;
`
export const InputDefault = styled.input`
    border-radius: 50px;
    margin-top: 35px;
    padding-left: 15px;
    width: 44%;
    height: 50px;
    border: none;
    font-size: 20px;
    @media screen and (max-width: 620px){
        width: 273px;
    }
    @media screen and (max-width: 300px){
        width: 250px;
    }
    &:focus{
        outline:none;
        border: 3px solid yellow;
    }
`
export const ButtonDefault = styled.button`
    border-radius: 15px;
    width: 300px;
    height: 50px;
    margin-top: 60px;
    background-color: yellow;
    font-size: 32px;
    color: black;
    border: none;
    cursor: pointer;
    @media screen and (max-width: 620px){
        width: 273px;
    }
    &:hover{
        opacity: 0.9
    }
`