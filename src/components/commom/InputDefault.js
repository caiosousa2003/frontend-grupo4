import { styled } from "styled-components";

export const InputDefault = styled.input`
  border-radius: 50px;
  margin-top: ${(props) => props.margintop || "35px"};
  padding-left: 15px;
  width: ${(props) => props.width || "44%"};
  height: ${(props) => props.height || "50px"};
  border: ${(props) => (props?.borda ? "2px solid red" : "none")};
  font-size: 20px;
  @media screen and (max-width: 620px) {
    width: 273px;
  }
  @media screen and (max-width: 300px) {
    width: 250px;
  }
  &:focus {
    outline: none;
    border: 2px solid yellow;
  }
`;
