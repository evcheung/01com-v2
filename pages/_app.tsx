import type { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from '../components/globalstyles'
import { Raleway } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
const theme: DefaultTheme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
  },
}

// If loading a variable font, you don't need to specify the font weight
const raleway = Raleway({ subsets: ['latin'] })


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className={raleway.className}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </main>
    </>
  )
}
