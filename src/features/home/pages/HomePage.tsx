import styled from 'styled-components'

interface Props {
  className?: string
}

const Component = ({ className }: Props) => {
  return <main className={className}>Main</main>
}

const HomePage = styled(Component)`
  & {
    background: red;
  }
`

export default HomePage
