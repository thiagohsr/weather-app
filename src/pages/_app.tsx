import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import { store } from 'store';

import themingWrapper from '@helpers/themingHelper';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        {themingWrapper(<Component {...pageProps} />)}
      </Provider>
    </>
  )
}

export default MyApp
