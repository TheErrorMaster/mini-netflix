import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { MovieStoreProvider } from '@/components/MovieStoreProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MovieStoreProvider {...pageProps}>
       <Component {...pageProps} />
    </MovieStoreProvider>
  )
}
