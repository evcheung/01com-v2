import Logo from 'public/assets/iit-logo.png'
import Image from 'next/image'
import { ButtonColors, PrimaryButton, Box, Text, TextVariants } from '../core'
import { theme } from '../../theme'
import styled from 'styled-components'
import Link from 'next/link'
import { breakpoints } from '../../utils/breakpoints'
import { NavBarVariants } from '../NavBar'
import { NavLink } from '../core/NavLink'
import { NavLogin } from '../core/NavLogin'

interface NavBarContainerProps {
  variant: NavBarVariants
}

const NavBarContainer = styled(Box) <NavBarContainerProps>`
background: ${theme.colors.neutral.xl}99;
borderBottom: 1px solid ${theme.colors.neutral.xs}30;
width: 100vw;
padding: 14px 48px;
position: absolute;
z-index: 9999;
top: 0;
  ${breakpoints("padding", "", [
  { 1240: "12px 32px" },
])}
`

const LogoContainer = styled(Image)`
  ${breakpoints("width", "", [
  { 1480: "90px" },
])}
  ${breakpoints("height", "", [
  { 1480: "auto" },
])}
`


export const IITNavBarDesktop = ({
  variant
}: {
  variant?: NavBarVariants
}) => {
  const isLight = variant === NavBarVariants.Light
  return (
    <>
      <NavBarContainer
        flexDirection='row'
        flexJustify='space-between'
        flexAlignment='center'
        variant={variant}
      >
        <Link href="/imintouch-remote-pc-desktop/" >
          <LogoContainer src={Logo} alt="I'm InTouch logo, click to return to main product page" />
        </Link>
        <Box flexDirection='row'>
          <NavLink color={theme.colors.neutral.xs} href="/imintouch-remote-pc-desktop/how-it-works" target="_blank" label="How It Works" />
          <NavLink color={theme.colors.neutral.xs} href="/imintouch-remote-pc-desktop/features" target="_blank" label="Features" />
          <NavLink color={theme.colors.neutral.xs} href="/imintouch-remote-pc-desktop/why-im-intouch" label="Why I'm InTouch?" />
          <NavLink color={theme.colors.neutral.xs} href="/imintouch-remote-pc-desktop/support" label="Support" />
          <NavLink color={theme.colors.neutral.xs} href="/imintouch-remote-pc-desktop/pricing-comparison" label="Pricing & Comparison" />
          <NavLink color={theme.colors.neutral.xs} href="/imintouch-remote-pc-desktop/affiliated-products" label="Affiliated Products" />
          <NavLink color={theme.colors.neutral.xs} href="/imintouch-remote-pc-desktop/resources" label="Resources" />
          <NavLink color={theme.colors.neutral.xs} href="/imintouch-remote-pc-desktop/security" label="Security" />
        </Box>
        <NavLogin isNavBarLight={false} isIIT={true} />
      </NavBarContainer>

    </>
  )
}
