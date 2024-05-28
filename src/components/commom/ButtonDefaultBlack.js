import { styled } from "styled-components";

export const ButtonDefaultBlack = styled.button`
  width: auto;
  height: auto;
  border: solid 2px yellow;
  border-radius: 7px;
  background-color: black;
  color: yellow;
  font-family: Arial;
  font-size: 24px;
  margin: 20px;
  cursor: pointer;
  @media screen and (max-width: 400px){
        font-size: ${(props) => props.font || "24px"};
    }
  @media screen and (max-width: 300px){
      margin: ${(props) => props.margin || "20px"};
  }
`;
