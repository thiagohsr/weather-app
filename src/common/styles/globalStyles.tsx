import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: ${({ theme }) => theme.colors.primary};
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 62.5%;
  }
  a, li {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
    font-size: 1.6rem;
  }

  // @media (prefers-color-scheme: dark) {
  //   html {
  //     color-scheme: dark;
  //   }
  //   body {
  //     color: white;
  //     background: black;
  //   }
  // }
  // @media (prefers-color-scheme: dark) {
  //   .card,
  //   .footer {
  //     border-color: #222;
  //   }
  //   .code {
  //     background: #111;
  //   }
  //   .logo img {
  //     filter: invert(1);
  //   }
  // }
    
`



export default GlobalStyle