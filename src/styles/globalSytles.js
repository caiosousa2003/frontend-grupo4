import { createGlobalStyle } from "styled-components";
import { colors, fonts } from "./sytlesVariables";

export const GlobalStyles = createGlobalStyle`
    html,body{
        font-family: ${fonts.Roboto}
        font-size: 15px;
        background-color: ${colors.background.primary};
        color: ${colors.font.primary};
        padding: 0;
        margin: 0;
    }
    h1{
        color: ${colors.font.title};
        font-size: 48;
    }
`;

export default GlobalStyles;
