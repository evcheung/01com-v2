import styled from "styled-components"
import { Box } from "./core"
import { breakpoints } from "../utils/breakpoints"

export const CardGrid = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; 
  grid-gap: 24px;
  margin: 48px 0px;

  ${breakpoints("grid-template-columns", "", [
  { 1200: '1fr 1fr' },
])}
  ${breakpoints("grid-template-columns", "", [
  { 760: '1fr' },
])}
  ${breakpoints("margin", "", [
  { 560: '0 0 32px 0' },
])}
`
