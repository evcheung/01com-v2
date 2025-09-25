import styled from "styled-components"
import { breakpoints } from "../../utils/breakpoints"
import { theme } from "../../theme"
import { Box } from "./box"
import Link from "next/link"
import Image from "next/image"

const StyledA = styled.a`
  font-size: ${theme.fontSize.sm};
  font-weight: ${theme.fontWeight[600]};
  cursor: pointer;
  margin: 0;
  padding: 0;
  color: ${props => props.color};
  white-space: nowrap;
  ${breakpoints("font-size", "", [
  { 1000: theme.fontSize.xs },
])}
`

const AnchorContainer = styled(Box) <any>`
margin: 0 24px;
// magic padding number to give more room to hover without affecting layout
padding: 30px 0px;
${breakpoints("margin", "", [
  { 1160: "0 18px" },
])}
${props => props.isMobile && (
    `margin: 0px;
  padding: 24px 16px;`
  )}
)}
`

export const NavLink = ({ href, label, color, target = "_self", isMobile = false, imgSrc, imgAlt="", imgHeight, imgWidth}: {
  href: string,
  label: string,
  color?: string,
  target?: '_self' | '_blank',
  isMobile?: boolean,
  imgSrc?: string,
  imgAlt?: string,
  imgHeight?: number,
  imgWidth?: number,
}) => (
  <Link href={href} target={target} passHref legacyBehavior>
    <AnchorContainer isMobile={isMobile} >
      {imgSrc && (
        <Image
          src={imgSrc}
          alt={imgAlt || label}
          width={imgWidth}
          height={imgHeight}
          style={{marginRight: "12px"}}
        />
      )}
      <StyledA color={color}>{label}</StyledA>
    </AnchorContainer>
  </Link>
)
