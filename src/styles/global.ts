import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box
}

body{
    background-color: ${(props) => props.theme.background};
    color:${(props) => props.theme['base-text']};
    -webkit-font-smoothing:antialiased
}

:focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-dark']};
}

body,input,textarea,button{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
}

a:link,
a:visited,
a:hover,
a:active {
  text-decoration: none;
  color: inherit; 
}


`
