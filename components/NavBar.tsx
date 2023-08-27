import Logo from 'public/assets/01com-logo.png'
import Image from 'next/image'
import { ButtonColors, PrimaryButton, Box } from './core'
import { theme } from '../theme'
import styled from 'styled-components'
import Link from 'next/link'

const StyledA = styled.a`
  font-size: ${theme.fontSize.sm};
  font-weight: ${theme.fontWeight[700]};
  cursor: pointer;
  margin: 0;
  padding: 0;
`

export const NavLink = ({ href, label, target = "_self" }) => (
  <Link href={href} target={target} passHref legacyBehavior>
    <Box margin="0px 24px">
      <StyledA>{label}</StyledA>
    </Box>
  </Link>
)

export const NavBar = () => {
  return (
    <Box
      flexDirection='row'
      flexJustify='space-between'
      flexAlignment='center'
      width="100vw"
      padding="16px 48px"
      style={{ backgroundColor: theme.colors.neutral.xs }}
    >
      <Link href="/">
        <Image src={Logo} alt="01com logo, click to return home" />
      </Link>
      <Box flexDirection='row'>
        <NavLink href="https://www.ironcap.ca/" target="blank" label="IronCAP"></NavLink>
        <NavLink href="https://www.ironcap.ca/ironcap-x" target="blank" label="IronCAP X"></NavLink>
        <NavLink href="/im-intouch" label="I'm InTouch"></NavLink>
        <NavLink href="/im-oncall" label="I'm OnCall"></NavLink>
        <NavLink href="/support" label="Support"></NavLink>
        <NavLink href="/intellectual-properties" label="Intellectual Properties"></NavLink>
      </Box>
      <PrimaryButton padding="18px 48px" btnColor={ButtonColors.Blue}>Login</PrimaryButton>
    </Box >
  )
}
