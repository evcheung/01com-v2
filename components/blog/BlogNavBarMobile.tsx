import BrandLogo from '../../public/assets/01com-logo.png'
import IITLogo from '../../public/assets/iit-logo.png'
import IITGoLogo from '../../public/assets/iit-go-logo.png'
import IITGoMailLogo from '../../public/assets/iit-go-mail-logo.png'
import IITServerLogo from '../../public/assets/iit-server-logo.png'
import IITSecureKEYLogo from '../../public/assets/iit-secure-key-logo.png'
import Image from 'next/image'
import { Box, Text, TextVariants, TextColors } from '../core'
import { theme } from '../../theme'
import styled from 'styled-components'
import Link from 'next/link'
import { NavBarVariants } from '../NavBar'
import { slide as Menu } from 'react-burger-menu'
import { NavLink } from '../core/NavLink'
import { NavLogin } from '../core/NavLogin'

const AnchorDivider = styled(Box)`
border-bottom: 1px solid ${theme.colors.neutral.md};
width: 100%;
`

const NavBarContainer = styled(Box)`
background: ${theme.colors.neutral.xl}99;
borderBottom: 1px solid ${theme.colors.neutral.xs}30;
width: 100vw;
padding: 12px 16px;
position: absolute;
top: 0;
z-index: 9999;
`

const LogoContainer = styled(Image)`
  width: 160px;
  height: auto;
`

export const BlogNavBarMobile = ({
  variant,
}: {
  variant?: NavBarVariants,
}) => {
  const isLight = variant === NavBarVariants.Light
  return (
    <>
      <NavBarContainer
        flexDirection='row'
        flexJustify='space-between'
        flexAlignment='center'
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
            background: theme.colors.neutral.xs,
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
            opacity: '98%',
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
              <>
                <AnchorDivider />
                <NavLink isMobile={true} color={theme.colors.neutral.xl} href="https://www.ironcap.ca/" target="_blank" label="IronCAP™" />
                <AnchorDivider />

                <NavLink isMobile={true} color={theme.colors.neutral.xl} href="https://www.ironcap.ca/ironcap-x/" target="_blank" label="IronCAP X™" />
                <AnchorDivider />

                <NavLink isMobile={true} color={theme.colors.neutral.xl} href="/imintouch-remote-pc-desktop/" label="I'm InTouch" />
                <AnchorDivider />

                <NavLink isMobile={true} color={theme.colors.neutral.xl} href="/support" label="Support" />
                <AnchorDivider />

                <NavLink isMobile={true} color={theme.colors.neutral.xl} href="/intellectual-properties" label="Intellectual Properties" />
              </>
          </Box>
        </Menu>
        <Link href={`/`} style={{ zIndex: 2000 }}>
          <LogoContainer src={BrandLogo} alt="01 Quantum Inc brand logo, click to return to homepage" />
        </Link>
        <NavLogin isNavBarLight={false} isIIT={true} />
      </NavBarContainer >
    </>
  )
}
