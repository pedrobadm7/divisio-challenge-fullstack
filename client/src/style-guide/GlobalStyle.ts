import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
    vertical-align: baseline;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 400;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'Roboto',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #262835;
  }

  ::-webkit-scrollbar-track {
    background-color: #F4F4F4;
    
  }
  ::-webkit-scrollbar {
      width: 6px;
      background: #F4F4F4;      
  }
  ::-webkit-scrollbar-thumb {
      background: #dad7d7;
      border-radius: 15px;
  }

`
