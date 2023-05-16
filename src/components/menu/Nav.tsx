import Link from 'next/link'
import styled from 'styled-components'

interface Props {
  className?: string
}

interface StyleProps {
  isOpen: boolean
}

const Component = ({ className }: Props) => {
  return (
    <nav className={className}>
      <ul>
        <li>
          <Link href='/' className={`${className}-link`}>
            &#39; Home &#39;
          </Link>
        </li>
        <li>
          <Link href='/' className={`${className}-link`}>
            &#39; About &#39;
          </Link>
        </li>
        <li>
          <Link href='/' className={`${className}-link`}>
            &#39; Blog &#39;
          </Link>
        </li>
        <li>
          <Link href='/' className={`${className}-link`}>
            &#39; Contact &#39;
          </Link>
        </li>
      </ul>
    </nav>
  )
}

const Nav = styled(Component)<StyleProps>`
  display: block;
  width: 100vw;
  height: 100vh;
  height: 100dvh;
  line-height: 1.5;
  position: absolute;
  top: 0;
  left: 0;
  padding: 5rem 0 0 0;
  overflow-y: auto;
  background-color: #4169e1;
  ${(props) =>
    props.isOpen
      ? 'transform: translateX(0); transition: all 0.4s ease-out;'
      : 'transform: translateX(100vw);'}

  & > ul {
    display: flex;
    flex-direction: column;
    justify-content: center;

    & > li {
      display: flex;
      justify-content: center;
      padding: 10px 0;
    }
  }

  &-link {
    text-align: center;
    font-family: 'shelby', sans-serif;
    font-size: 10vw;
    font-weight: 700;
    font-style: normal;
    line-height: 1.5;
    color: #ffffff;

    @media screen and (min-width: 701px) {
      font-size: 5vw;
    }
  }
`

export default Nav
