import type { AppProps } from 'next/app'
import 'modern-css-reset/dist/reset.min.css'

const PortfolioApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default PortfolioApp
