import styled from 'styled-components'
import Hamburger from './Hamburger'
import Nav from './Nav'

interface Props {
  toggleMenu: () => void
}

interface StyleProps {
  isOpen: boolean
}

const Component = ({ isOpen, toggleMenu }: Props & StyleProps) => {
  return (
    <>
      <Nav isOpen={isOpen} />
      <Hamburger isOpen={isOpen} toggleMenu={toggleMenu} />
    </>
  )
}

const Menu = styled(Component)``

export default Menu
