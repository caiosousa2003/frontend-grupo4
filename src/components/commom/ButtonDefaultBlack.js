import { styled } from "styled-components";

export const ButtonDefaultBlack = styled.button`
  width: 170px;
  height: auto;
  border: solid 2px yellow;
  border-radius: 7px;
  background-color: black;
  color: yellow;
  font-family: Arial;
  font-size: 24px;
  margin: 20px;
  cursor: pointer;
  @media screen and (max-width: 400px) {
    font-size: 5vw;
    width: 50%;
  }
  @media screen and (max-width: 300px) {
    margin: ${(props) => props.margin || "20px"};
  }
`;
