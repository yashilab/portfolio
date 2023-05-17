import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import 'modern-css-reset/dist/reset.min.css'
import { ReactElement, ReactNode } from 'react'
import GlobalStyle from '@/styles/GlobalStyle'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const PortfolioApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>,
  )
}

export default PortfolioApp
