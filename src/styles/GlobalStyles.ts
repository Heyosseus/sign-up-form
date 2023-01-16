import { createGlobalStyle } from "styled-components";
import mobile from '../assets/bg-intro-mobile.png';



export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        display: flex;
        flex-direction: column;
        background-image: url(${mobile});
        background-color: #FF7979;
        min-height: 100vh;
        font-family: 'Poppins', sans-serif;
    }
`;