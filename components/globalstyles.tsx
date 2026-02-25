import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --font-jost: "Jost", "Avenir Next", "Segoe UI", "Helvetica Neue", Arial, sans-serif;
    --font-raleway: "Raleway", "Avenir Next", "Segoe UI", "Helvetica Neue", Arial, sans-serif;
  }

  html{
    scroll-behaviour: smooth;
  },
  body {
    color: ${({ theme }) => theme.colors.primary};
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`

export default GlobalStyle
