import { createGlobalStyle } from 'styled-components'
import { color } from './theme'

const GlobalStyle = createGlobalStyle`
  body {
    min-height: 100vh;
    min-height: 100dvh;
  }

  button {
    appearance: none;
    outline: none;
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: ${color.text.black};
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`

export default GlobalStyle
