import type { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from '../components/globalstyles'
import { Raleway} from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

const theme: DefaultTheme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
  },
}

// If loading a variable font, you don't need to specify the font weight
const raleway = Raleway({ subsets: ['latin'], display: 'swap', adjustFontFallback: false })


export default function App({ Component, pageProps }: AppProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])
  return (
    <>
      {isClient && <main className={`${raleway.className}`}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </main>}
    </>
  )
}

App.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
  if (Object.keys(pageProps).length > 0) {
    return { pageProps };
  } else {
    return {};
  }
};
