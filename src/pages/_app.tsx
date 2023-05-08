import type { AppProps } from 'next/app'
import 'modern-css-reset/dist/reset.min.css'
import GlobalStyle from '@/styles/GlobalStyle'

const PortfolioApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default PortfolioApp
