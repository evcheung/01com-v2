import IOCLogo from '../../public/assets/ioc-logo.png'
import Image from 'next/image'
import { Box, ButtonColors, ButtonTextColors } from '../core'
import { theme } from '../../theme'
import styled from 'styled-components'
import Link from 'next/link'
import { breakpoints } from '../../utils/breakpoints'
import { NavBarVariants } from '../NavBar'
import { NavLink } from '../core/NavLink'
import { NavLogin } from '../core/NavLogin'
import { useDebounceCallback } from 'usehooks-ts'

interface NavBarContainerProps {
  variant: NavBarVariants
}

const NavBarContainer = styled(Box)<NavBarContainerProps>`
  background: ${theme.colors.neutral.xl}99;
  border-bottom: 1px solid ${theme.colors.neutral.xs}30;
  width: 100vw;
  padding: 0px 48px; /* V padding is 0 because height comes from Navlink items */
  position: absolute;
  z-index: 9999;
  top: 0;

  ${breakpoints("padding", "", [
    { 1240: "0px 32px" },
  ])}
`

const LogoContainer = styled(Image)`

  ${breakpoints("width", "", [
    { 1280: "110px" },
  ])}
  ${breakpoints("height", "", [
    { 1480: "auto" },
  ])}
`


export type NavBarProps = {
  variant?: NavBarVariants;
  subSite?: 'go' | 'gomail' | 'server' | 'securekey';
};

export const IOCNavBarDesktop: React.FC<NavBarProps> = ({ variant, subSite }) => {
  const debouncedHideMenu = useDebounceCallback(() => {
    if (!document.querySelector('.hover-dropdown-menu :hover')) {
      const menu = document.querySelector('.hover-dropdown-menu') as HTMLElement
      if (menu) {
        menu.style.visibility = 'hidden'
      }
    }
  }, 100)

  return (
    <NavBarContainer
      flexDirection='row'
      flexJustify='space-between'
      flexAlignment='center'
      variant={variant}
    >
      {/* Logo just goes to main help desk home */}
      <Link href="/imoncall-remote-help-desk">
        <LogoContainer
          src={IOCLogo}
          alt="I'm OnCall product logo, click to return to main menu"
        />
      </Link>

      {/* Main nav links only */}
      <Box flexDirection='row'>
        <NavLink color={theme.colors.neutral.xs} href="/imoncall-remote-help-desk/how-it-works" target="_blank" label="How It Works" />
        <NavLink color={theme.colors.neutral.xs} href="/imoncall-remote-help-desk/features" target="_blank" label="Features" />
        <NavLink color={theme.colors.neutral.xs} href="/imoncall-remote-help-desk/support" label="Support" />
        <NavLink color={theme.colors.neutral.xs} href="/imoncall-remote-help-desk/pricing-comparison" label="Pricing & Comparison" />
        <NavLink color={theme.colors.neutral.xs} href="/imoncall-remote-help-desk/benefits" label="Benefits" />
        <NavLink color={theme.colors.neutral.xs} href="/imoncall-remote-help-desk/tell-a-friend" label="Tell a Friend" />
        <NavLink color={theme.colors.neutral.xs} href="/imoncall-remote-help-desk/connect-to-an-agent" label="Connect to an Agent" />
      </Box>

      {/* Login button stays the same */}
      <NavLogin isNavBarLight={false} isIIT={false} textColor={ButtonTextColors.Green}/>
    </NavBarContainer>
  )
}
