import styled from 'styled-components'
import { color } from '@/styles/theme'

interface Props {
  toggleMenu: () => void
  className?: string
}

interface StyleProps {
  isOpen: boolean
}

const Component = ({ toggleMenu, className }: Props) => {
  return (
    <button className={`${className}`} onClick={toggleMenu}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  )
}

const Hamburger = styled(Component)<StyleProps>`
  width: 2rem;
  height: 2rem;
  position: relative;

  & span {
    display: block;
    width: 100%;
    height: 1px;
    ${(props) =>
      props.isOpen
        ? `background-color: ${color.base.white};`
        : `background-color: ${color.base.black};`}
    position: absolute;

    &:nth-child(1) {
      ${(props) =>
        props.isOpen
          ? `top: 50%;
            transform: rotate(45deg) translateY(-50%);
            transition: all 0.4s ease-out;`
          : 'top: 5px;'}
    }

    &:nth-child(2) {
      top: 50%;
      ${(props) => (props.isOpen ? 'opacity: 0;' : 'opacity: 1;')}
    }

    &:nth-child(3) {
      ${(props) =>
        props.isOpen
          ? `top: 50%;
            transform: rotate(-45deg) translateY(-50%);
            transition: all 0.4s ease-out;`
          : 'bottom: 5px;'}
    }
  }
`

export default Hamburger
