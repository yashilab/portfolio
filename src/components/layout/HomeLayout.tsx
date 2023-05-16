import { PropsWithChildren } from 'react'
import styled from 'styled-components'
import HomeHeader from '../header/HomeHeader'

type Props = PropsWithChildren & {
  className?: string
}

const Component = ({ children, className }: Props) => {
  return (
    <div className={className}>
      <HomeHeader />
      <main>{children}</main>
    </div>
  )
}

const HomeLayout = styled(Component)`
  position: relative;
`

export default HomeLayout
