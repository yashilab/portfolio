import Gsap from 'gsap'
import { TextPlugin } from 'gsap/dist/TextPlugin'
import { useEffect } from 'react'
import styled from 'styled-components'

interface Props {
  className?: string
}

const Component = ({ className }: Props) => {
  useEffect(() => {
    Gsap.registerPlugin(TextPlugin)
    setAnimation()
  }, [])
  const setAnimation = () => {
    Gsap.to('#mainVisual', {
      duration: 2,
      text: {
        value: 'Yashi Lab',
        delimiter: '',
      },
      ease: 'ease',
    })
  }
  return (
    <div className={className}>
      <h1 id='mainVisual' className={`${className}__text`}></h1>
    </div>
  )
}

const MainVisual = styled(Component)`
  width: 100vw;
  height: 100vh;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;

  &__text {
    width: 100%;
    font-family: 'shelby', sans-serif;
    font-size: 20vw;
    font-weight: 700;
    font-style: normal;
    color: #4169e1;
    text-align: center;
  }
`

export default MainVisual
