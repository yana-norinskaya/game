import {createGlobalStyle, css} from 'styled-components';

const GlobalStyle = createGlobalStyle(({theme}) => css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Barlow Semi Condensed', sans-serif;
          }
          body {
            height: 100%;
            background: rgba(42, 62, 132, 1);
            position: relative;
          }
    `)
;

export default GlobalStyle;