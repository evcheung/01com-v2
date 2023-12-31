import styled from "styled-components"
import { breakpoints } from "../../utils/breakpoints"
import { theme } from "../../theme"
import { Box } from "./box"
import Link from "next/link"

const StyledA = styled.a`
  font-size: ${theme.fontSize.sm};
  font-weight: ${theme.fontWeight[600]};
  cursor: pointer;
  margin: 0;
  padding: 0;
  color: ${props => props.color};
  ${breakpoints("font-size", "", [
  { 1000: theme.fontSize.xs },
])}
`

const AnchorContainer = styled(Box)`
margin: 0 24px;
${breakpoints("margin", "", [
  { 1160: "0 18px" },
])}
${breakpoints("margin", "", [
  { 760: "0" },
])}
${breakpoints("padding", "", [
  { 760: "24px 16px" },
])}
`

export const NavLink = ({ href, label, color, target = "_self" }) => (
  <Link href={href} target={target} passHref legacyBehavior>
    <AnchorContainer>
      <StyledA color={color}>{label}</StyledA>
    </AnchorContainer>
  </Link>
)
