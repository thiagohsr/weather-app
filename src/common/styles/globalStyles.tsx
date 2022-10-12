import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  html,
  body {
    color: ${({ theme }) => theme.colors.primary};
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
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