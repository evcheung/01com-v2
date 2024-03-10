import Logo from '../public/assets/01com-logo.png'
import Image from 'next/image'
import { ButtonColors, PrimaryButton, Box, Text, TextVariants } from './core'
import { theme } from '../theme'
import styled from 'styled-components'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { NavBarVariants } from './NavBar'
import { slide as Menu } from 'react-burger-menu'
import { NavLink } from './core/NavLink'
import { NavLogin } from './core/NavLogin'

const AnchorDivider = styled(Box)`
border-bottom: 1px solid ${theme.colors.neutral.md};
width: 100%;
`

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
  return navBarVariantMap.get(props.variant)
}

const NavBarContainer = styled(Box) <NavBarContainerProps>`
  ${props => ({
    ...getNavBarVariant(props),
    width: "100vw",
    padding: "12px 16px",
  })};
`

const LogoContainer = styled(Image)`
  width: 80px;
  height: auto;
`

export const NavBarMobile = ({
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

        <Menu styles={{
          bmBurgerButton: {
            position: 'relative',
            width: '30px',
            height: '20px',
            // left: '30px',
            // top: '24px'
          },
          bmBurgerBars: {
            background: isLight ? theme.colors.neutral.xl : theme.colors.neutral.xs,
            height: "2px"
          },
          // bmBurgerBarsHover: {
          //   background: '#a90000'
          // },
          bmCrossButton: {
            height: '24px',
            width: '24px',
            left: '16px',
            top: '14px',
          },
          bmCross: {
            background: theme.colors.neutral.xl,
            width: '2px',
            height: '28px',
          },
          bmMenuWrap: {
            position: 'fixed',
            top: '0',
            left: '0',
            height: '100%',
            zIndex: isLight ? 1100 : 2100,
          },
          bmMenu: {
            background: theme.colors.neutral.xs,
            opacity: isLight ? '100%' : '98%',
            padding: '70px 0 0 0',
          },
          bmMorphShape: {
            fill: theme.colors.neutral.xs,
          },
          bmItemList: {
            color: theme.colors.neutral.sm,
          },
          bmItem: {
            display: 'inline-block'
          },
          bmOverlay: {
            background: 'transparent'
          },
        }}>
          <Box flexDirection='column' width="100%">
            <AnchorDivider />
            <NavLink isMobile={true} color={theme.colors.neutral.xl} href="https://www.ironcap.ca/" target="_blank" label="IronCAP™" />
            <AnchorDivider />

            <NavLink isMobile={true} color={theme.colors.neutral.xl} href="https://www.ironcap.ca/ironcap-x" target="_blank" label="IronCAP X™" />
            <AnchorDivider />

            <NavLink isMobile={true} color={theme.colors.neutral.xl} href="https://www.01com.com/imintouch-remote-pc-desktop/" label="I'm InTouch" />
            <AnchorDivider />

            <NavLink isMobile={true} color={theme.colors.neutral.xl} href="https://www.01com.com/imoncall-remote-help-desk/" label="I'm OnCall" />
            <AnchorDivider />

            <NavLink isMobile={true} color={theme.colors.neutral.xl} href="/support" label="Support" />
            <AnchorDivider />

            <NavLink isMobile={true} color={theme.colors.neutral.xl} href="/intellectual-properties" label="Intellectual Properties" />
            <AnchorDivider />

          </Box>
        </Menu>
        <Link href="/" style={{ zIndex: 2000 }}>
          <LogoContainer src={Logo} alt="01com logo, click to return home" />
        </Link>
        <NavLogin isNavBarLight={isLight} />
      </NavBarContainer>
    </>
  )
}
