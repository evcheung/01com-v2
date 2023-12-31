import Logo from 'public/assets/01com-logo.png'
import Image from 'next/image'
import { ButtonColors, PrimaryButton, Box, Text, TextVariants } from './core'
import { theme } from '../theme'
import styled from 'styled-components'
import Link from 'next/link'
import { breakpoints } from '../utils/breakpoints'
import { NavBarVariants } from './NavBar'
import { NavLink } from './core/NavLink'
import { NavLogin } from './core/NavLogin'

interface NavBarContainerProps {
  variant: NavBarVariants
}

const navBarVariantMap = new Map<string, React.CSSProperties>([
  ["Light", {
    backgroundColor: theme.colors.neutral.xs
  }],
  ["Dark", {
    background: `${theme.colors.neutral.xl}70`,
    borderBottom: `1px solid ${theme.colors.neutral.xs}30`
  }]
])

const getNavBarVariant = (props: NavBarContainerProps) => {
  return navBarVariantMap.get(props.variant as NavBarVariants)
}

const NavBarContainer = styled(Box) <NavBarContainerProps>`
  ${props => ({
    ...getNavBarVariant(props),
    width: "100vw",
    padding: "14px 48px",
  })};
  ${breakpoints("padding", "", [
    { 1240: "12px 32px" },
  ])}
`

const LogoContainer = styled(Image)`
  ${breakpoints("width", "", [
  { 1160: "80px" },
])}
  ${breakpoints("height", "", [
  { 1160: "auto" },
])}
`

export const NavBarDesktop = ({
  variant
}: {
  variant?: NavBarVariants
}) => {
  const isLight = variant === NavBarVariants.Light
  const navLinkColor = isLight ? theme.colors.neutral.xl : theme.colors.neutral.xs;

  return (
    <>
      <NavBarContainer
        flexDirection='row'
        flexJustify='space-between'
        flexAlignment='center'
        variant={variant}
      >
        <Link href="/" >
          <LogoContainer src={Logo} alt="01com logo, click to return home" />
        </Link>
        <Box flexDirection='row'>
          <NavLink color={navLinkColor} href="https://www.ironcap.ca/" target="_blank" label="IronCAP™" />
          <NavLink color={navLinkColor} href="https://www.ironcap.ca/ironcap-x" target="_blank" label="IronCAP X™" />
          <NavLink color={navLinkColor} href="/imintouch-remote-pc-desktop/" label="I'm InTouch" />
          <NavLink color={navLinkColor} href="https://www.01com.com/imoncall-remote-help-desk/" label="I'm OnCall" />
          <NavLink color={navLinkColor} href="/support" label="Support" />
          <NavLink color={navLinkColor} href="/intellectual-properties" label="Intellectual Properties" />
        </Box>
        <NavLogin isNavBarLight={isLight} />

      </NavBarContainer>

    </>
  )
}
