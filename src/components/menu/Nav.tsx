import Link from 'next/link'
import styled from 'styled-components'
import { color } from '@/styles/theme'

interface Props {
  currentPage: string
  className?: string
}

interface StyleProps {
  isOpen: boolean
}

const pageList = [
  {
    name: 'home',
    text: "' Home '",
    uri: '/',
  },
  {
    name: 'about',
    text: "' About '",
    uri: '/about',
  },
  {
    name: 'blog',
    text: "' Blog '",
    uri: '/blog',
  },
  {
    name: 'contact',
    text: "' Contact '",
    uri: '/contact',
  },
]

const Component = ({ currentPage, className }: Props) => {
  return (
    <nav className={className}>
      <ul>
        {pageList.map((p, i) => (
          <li key={i}>
            {p.uri === currentPage ? (
              <span className={`${className}-link--current`}>{p.text}</span>
            ) : (
              <Link href={`${p.uri}`} className={`${className}-link`}>
                {p.text}
              </Link>
            )}
          </li>
        ))}
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
  background-color: ${color.primary.light};
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
    color: ${color.text.white};

    @media screen and (min-width: 701px) {
      font-size: 5vw;
    }

    &\--current {
      font-family: 'shelby', sans-serif;
      font-size: 10vw;
      font-weight: 700;
      font-style: normal;
      line-height: 1.5;
      color: ${color.text.white};
      position: relative;

      @media screen and (min-width: 701px) {
        font-size: 5vw;
      }

      &::after {
        content: '';
        position: absolute;
        display: block;
        width: 100%;
        height: 1px;
        background-color: ${color.base.white};
        top: 50%;
        transform: translateY(-50%);

        @media screen and (min-width: 701px) {
          height: 2px;
        }
      }
    }
  }
`

export default Nav
