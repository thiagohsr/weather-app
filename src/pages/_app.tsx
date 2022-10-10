import type { AppProps } from 'next/app'
import themingWrapper from '@helpers/themingHelper';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {themingWrapper(<Component {...pageProps} />)}
    </>
  )
}

export default MyApp
