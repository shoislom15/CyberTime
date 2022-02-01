import { createGlobalStyle } from "styled-components";
import colors from "./Colors";

const GlobalStyle = createGlobalStyle`
  body {
    min-height: 100vh;
    background-color: ${colors.mainBgColor} !important;
    color: #777675;
  }

  ul{
    list-style-type: none
    margin: 0;
    padding: 0;
  }

  a{
    text-decoration: none !important;
    color: black !important;
  }

  .main{
    min-height: 100vh;
    width: 100%;
  }

  .active{
    background-color: ${colors.gray} !important;
    color: ${colors.yellow} !important;
  }
  
  .fw-5{
    font-weight: 500 !important;
  }
  
  .text-yellow{
    color: ${colors.yellow} !important;
  
  }
`;

export default GlobalStyle;
