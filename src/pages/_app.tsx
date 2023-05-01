import type { AppProps } from 'next/app'

const PortfolioApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default PortfolioApp
