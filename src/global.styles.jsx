import { createGlobalStyle } from "styled-components";

import DaimonFont from './assets/fonts/Damion-Regular.ttf';
import CouragetteFont from './assets/fonts/Courgette-Regular.ttf';

export const GlobalStyle = createGlobalStyle`
    :root{
        --default-background: #F0F0F0;
        --red: #F45050;
        --yellow: #F9D949;
        --dark-blue: #3C486B;
        --white-text: #ffffff;
        --blue: #006ddb;
        --secondary-blue: #39ace7;
        --text: #1d1d1f;
        --secondary-text: #808080;
    }

    body{
        margin: 0px;
        padding: 0px;
    }


  @font-face {
    font-family: 'Courgette';
    src: url(${CouragetteFont});
  }

  @font-face {
    font-family: 'Damion';
    src: url(${DaimonFont});
  }

`;
