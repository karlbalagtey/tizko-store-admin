import { createGlobalStyle } from "styled-components";
import 'fontsource-roboto';

export const GlobalStyle = createGlobalStyle`
    body {
        padding: 20px 40px;
        font-family: 'Roboto';

        @media screen and (max-width: 800px) {
            padding: 10px;
        }
    }
    
    a {
        text-decoration: none;
        color: black;
    }
    
    * {
        box-sizing: border-box;
    }
`;
