import { styled } from "styled-components";

export const InputDefault = styled.input`
  border-radius: 50px;
  margin-top: ${(props) => props.margintop || "35px"};
  padding-left: 15px;
  width: ${(props) => props.width || "500px"};
  height: ${(props) => props.height || "50px"};
  border: ${(props) => (props?.borda ? "2px solid red" : "none")};
  font-size: ${(props) => props.font || "20px"};
  @media screen and (max-width: 600px) {
    width: 80%;
  }
  &:focus {
    outline: none;
    border: 2px solid yellow;
  }
`;
