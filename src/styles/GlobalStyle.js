import { createGlobalStyle } from "styled-components";
import colors from "./Colors";

const GlobalStyle = createGlobalStyle`
  body {
    min-height: 100vh;
    background-color: ${colors.mainBgColor} !important;
    color: #777675;
    font-family: 'Montserrat', sans-serif;
  }

  ul{
    list-style-type: none
    margin: 0;
    padding: 0;
    max-width: 1000px; 
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
  .text-gray{
    color: #777675;
  }

  .bg-gray{
    background-color: ${colors.gray} !important;
  }
  .border-gray{
    border: 2px solid #ffffffa2 !important;
    border-radius: 25px;
    width: 40px;
    heigth: 20px;
  }

  .rounded{
    border-radius: 10px !important;
  }

  .labelCircle{
    height: 20px;
    width: 20px;
    transform: scale(1.17) !important;
    background-color: #ffffffa2 !important;
  }

  .activeLabel{
    transform: translateX(80%) !important;
    background-color: ${colors.yellow} !important;
    // filter: blur(1px);
  }
`;

export default GlobalStyle;
