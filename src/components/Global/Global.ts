import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
    }

    html {
        font-family: InterFace, Arial, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 1rem;
        line-height: 1.5rem;
        background-color: white;
    }
`;

export default GlobalStyles;
