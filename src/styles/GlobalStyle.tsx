import { createGlobalStyle } from "styled-components";
import variables from './variables';

const GlobalStyle = createGlobalStyle`
  ${variables};

  html {
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
    font-family: Inter;
  }

  body {
    background: ${(props) => props.theme.color.base1};
    color: ${(props) => props.theme.color.primary1};
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%
  }
`

export default GlobalStyle;