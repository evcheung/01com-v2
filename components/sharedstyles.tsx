import styled from 'styled-components'
import { theme } from '../theme'
import texture from '../public/assets/texture.png'
import { breakpoints } from '../utils/breakpoints'

const Container = styled.div`
  background: no-repeat top/contain url("${texture.src}");
  background-color:  ${theme.colors.neutral.sm};
  display: flex;
  flex-direction: column nowrap;
  align-items: center;
  justify-content: center;
  padding: 0px 48px;
  overflow: hidden;
  ${breakpoints("padding", "", [
  { 1280: "0px 32px" },
])}
  ${breakpoints("padding", "", [
  { 760: "0px 16px" },
])}

`
const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1980px;
  min-height: 100vh;
`

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  text-decoration: none;

  a {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
    &:hover,
    :focus,
    :active {
      text-decoration: underline;
    }
  }
`

const Description = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
`
const CodeTag = styled.code`
  background: #fafafa;
  border-radius: 5px;
  margin: 0 0.75rem;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
`

export { Container, Main, Title, Description, CodeTag }
