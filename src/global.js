import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: #000;
    color: #fff;
}`

export default GlobalStyles
