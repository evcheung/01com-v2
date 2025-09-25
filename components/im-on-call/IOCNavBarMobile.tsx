import IOCLogo from '../../public/assets/ioc-logo.png'
import Image from 'next/image'
import { Box, Text, TextVariants, TextColors } from '../core'
import { theme } from '../../theme'
import styled from 'styled-components'
import Link from 'next/link'
import { NavBarVariants } from '../NavBar'
import { slide as Menu } from 'react-burger-menu'
import { NavLink } from '../core/NavLink'
import { NavLogin } from '../core/NavLogin'
import vector from '../../public/assets/vector-12.png'

const AnchorDivider = styled(Box)`
  border-bottom: 1px solid ${theme.colors.neutral.md};
  width: 100%;
`

const NavBarContainer = styled(Box)`
  background: ${theme.colors.neutral.xl}99;
  border-bottom: 1px solid ${theme.colors.neutral.xs}30;
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

export const IOCNavBarMobile = ({ variant }: { variant?: NavBarVariants }) => {
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
          },
          bmBurgerBars: {
            background: theme.colors.neutral.xs,
            height: "2px"
          },
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
            <NavLink imgSrc={vector.src} imgWidth={8} imgHeight={12} isMobile={true} color={theme.colors.neutral.xl} href="/imintouch-remote-pc-desktop" target="_blank" label = "I'm InTouch" />
            <AnchorDivider />

            <AnchorDivider />
            <NavLink isMobile={true} color={theme.colors.neutral.xl} href="/imoncall-remote-help-desk/how-it-works" target="_blank" label="How It Works" />
            <AnchorDivider />

            <NavLink isMobile={true} color={theme.colors.neutral.xl} href="/imoncall-remote-help-desk/features" target="_blank" label="Features" />
            <AnchorDivider />

            <NavLink isMobile={true} color={theme.colors.neutral.xl} href="/imoncall-remote-help-desk/support" label="Support" />
            <AnchorDivider />

            <NavLink isMobile={true} color={theme.colors.neutral.xl} href="/imoncall-remote-help-desk/pricing-comparison" label="Pricing & Comparison" />
            <AnchorDivider />

            <NavLink isMobile={true} color={theme.colors.neutral.xl} href="/imoncall-remote-help-desk/benefits" label="Benefits" />
            <AnchorDivider />

            <NavLink isMobile={true} color={theme.colors.neutral.xl} href="/imoncall-remote-help-desk/tell-a-friend" label="Tell a Friend" />
            <AnchorDivider />

            <NavLink isMobile={true} color={theme.colors.neutral.xl} href="/imoncall-remote-help-desk/connect-to-an-agent" label="Connect to an Agent" />
            <AnchorDivider />

          </Box>
        </Menu>

        <Link href="/imoncall-remote-help-desk" style={{ zIndex: 2000 }}>
          <LogoContainer src={IOCLogo} alt="I'm OnCall homepage, click to return to main menu" />
        </Link>
        <NavLogin isNavBarLight={false} isIIT={true} />
      </NavBarContainer>
    </>
  )
}
