import { createGlobalStyle } from "styled-components";
import variables from './variables';

const GlobalStyle = createGlobalStyle`
  ${variables};

  html {
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%
  }
`

export default GlobalStyle;