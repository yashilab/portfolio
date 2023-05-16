import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Menu from '../menu/Menu'

interface Props {
  className?: string
}

const Component = ({ className }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className={className}>
      <Menu isOpen={isOpen} toggleMenu={toggleMenu} />
    </header>
  )
}

const HomeHeader = styled(Component)`
  position: fixed;
  line-height: 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 20px 20px 0 0;
`

export default HomeHeader
