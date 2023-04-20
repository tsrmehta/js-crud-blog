import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --default-background: #F0F0F0;
        --red: #F45050;
        --yellow: #F9D949;
        --dark-blue: #3C486B;
        --white-text: #ffffff;
    }

    body{
        margin: 0px;
        padding: 0px;
    }

`;