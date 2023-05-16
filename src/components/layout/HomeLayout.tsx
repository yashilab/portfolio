import { useRouter } from 'next/router'
import { PropsWithChildren } from 'react'
import styled from 'styled-components'
import HomeHeader from '../header/HomeHeader'

type Props = PropsWithChildren & {
  currentPage: string
  className?: string
}

const Component = ({ children, className }: Props) => {
  const router = useRouter()
  const currentPage = router.pathname
  return (
    <div className={className}>
      <HomeHeader currentPage={currentPage} />
      <main>{children}</main>
    </div>
  )
}

const HomeLayout = styled(Component)`
  position: relative;
`

export default HomeLayout
