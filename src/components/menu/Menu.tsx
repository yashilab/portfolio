import styled from 'styled-components'
import Hamburger from './Hamburger'
import Nav from './Nav'

interface Props {
  toggleMenu: () => void
  currentPage: string
}

interface StyleProps {
  isOpen: boolean
}

const Component = ({ isOpen, toggleMenu, currentPage }: Props & StyleProps) => {
  return (
    <>
      <Nav isOpen={isOpen} currentPage={currentPage} />
      <Hamburger isOpen={isOpen} toggleMenu={toggleMenu} />
    </>
  )
}

const Menu = styled(Component)``

export default Menu
