import '../styles/index.css'
import type { AppProps } from 'next/app'
import Layout from '../components/templates/Layout/Layout';

declare global {
  interface Window {
    kakao :any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}
