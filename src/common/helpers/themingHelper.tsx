import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from '@styles/globalStyles';

const theme: DefaultTheme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
  },
}

const themingWrapper = (children: any) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)

export default themingWrapper;
