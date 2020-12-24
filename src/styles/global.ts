import ThemeProps from '../@types/theme';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle<ThemeProps>`

*{
    padding:0;
    margin:0;
    box-sizing:border-box;
}

html{
    font-size:62.5%;
}
body{
  
    font-family:'Josefin Sans', '--apple-system', BlinkMacSystemFont, 
    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 
    'Open Sans', 'Helvetica Neue', sans-serif;
}

html, body, #__next{
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    background: ${(ThemeProps) => ThemeProps.Theme.color.primary};
}
h1,h2, h3, h4 h5{
    font-family: 'Josefin Sans';
}
img{
        width:100%;
        height:100%;
        background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
}

input{

    width:100%;
    font-family: 'Josefin Sans';
    list-style:none;
    outline:none;
    border:0;
    padding:1.5rem;
    border-radius:0.4rem;
}

li{
    list-style:none;
    cursor: pointer;
}
`;

export default GlobalStyle;
