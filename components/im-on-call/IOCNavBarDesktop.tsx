import IOCLogo from '../../public/assets/ioc-logo.png'
import IITGoLogo from '../../public/assets/iit-go-logo.png'
import IITGoMailLogo from '../../public/assets/iit-go-mail-logo.png'
import IITServerLogo from '../../public/assets/iit-server-logo.png'
import IITSecureKEYLogo from '../../public/assets/iit-secure-key-logo.png'
import Image from 'next/image'
import { Box, Text, TextVariants } from '../core'
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

const NavBarContainer = styled(Box) <NavBarContainerProps>`
background: ${theme.colors.neutral.xl}99;
borderBottom: 1px solid ${theme.colors.neutral.xs}30;
width: 100vw;
// V padding is 0 because height comes from Navlink items
padding: 0px 48px;
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

const StyledDropdownMenu = styled(Box)`
background: ${theme.colors.neutral.xs};
position: absolute;
top: 84px;
left: 24px;
z-index: 2;
display: grid;
grid-template-rows: 1fr 1fr 1fr;
padding: 24px;
row-gap: 24px;
visibility: hidden;
 p {
  white-space: nowrap;
}
:before {
  content: '';
  width: 124px;
  height: 4px;
  background: ${theme.colors.neutral.xl};
  position: absolute;
  top: 0;
  left: 0;
}
`

const displayMenu = () => {
  const menu: HTMLElement = document.querySelector('.hover-dropdown-menu')
  if (menu) {
    menu.style.visibility = 'visible'
  }
}

const hideMenu = () => {
  const menu: HTMLElement = document.querySelector('.hover-dropdown-menu')
  if (menu) {
    menu.style.visibility = 'hidden'
  }
}

const AffiliatedProductsMenu = ({ handleMouseLeave }) => {
  return (
    <StyledDropdownMenu className="hover-dropdown-menu" onMouseOver={displayMenu} onMouseLeave={handleMouseLeave}>
      <Link href='/imoncall-remote-help-desk/go'>
        <Text variant={TextVariants.Feat2}>I'm InTouch Go</Text>
      </Link>
      <Link href='/imoncall-remote-help-desk/gomail'>
        <Text variant={TextVariants.Feat2}>I'm InTouch GoMail</Text>
      </Link>
      <Link href='/imoncall-remote-help-desk/server'>
        <Text variant={TextVariants.Feat2}>I'm InTouch Server Edition</Text>
      </Link>
      <Link href='/imoncall-remote-help-desk/secure-key'>
        <Text variant={TextVariants.Feat2}>I'm InTouch SecureKEY</Text>
      </Link>
    </StyledDropdownMenu>
  )
}

const getLogo = (subSite: 'go' | 'gomail' | 'server' | 'securekey') => {
  switch (subSite) {
    case 'go':
      return IITGoLogo
    case 'gomail':
      return IITGoMailLogo
    case 'server':
      return IITServerLogo
    case 'securekey':
      return IITSecureKEYLogo
  }
}
const getSubSiteLink = (subSite: 'go' | 'gomail' | 'server' | 'securekey') => {
  switch (subSite) {
    case 'go':
    case 'gomail':
    case 'server':
      return subSite
    case 'securekey':
      return 'secure-key'
  }
}

export const IOCNavBarDesktop = ({
  variant,
  subSite
}: {
  variant?: NavBarVariants,
  subSite?: 'go' | 'gomail' | 'server' | 'securekey'
}) => {
  const debouncedHideMenu = useDebounceCallback(
    () => {
      if (document.querySelector('.hover-dropdown-menu :hover')) {
        return
      } else {
        hideMenu()
      }
    },
    100
  );

  return (
    <>
      <NavBarContainer
        flexDirection='row'
        flexJustify='space-between'
        flexAlignment='center'
        variant={variant}
      >
        <Link href={`/imoncall-remote-help-desk/${getSubSiteLink(subSite) || ''}`}>
          <LogoContainer src={!subSite ? IOCLogo : getLogo(subSite)} alt="I'm InTouch product logo, click to return to main product page" />
        </Link>
        <Box flexDirection='row'>
          {!subSite &&
            <>
              <NavLink color={theme.colors.neutral.xs} href="/imoncall-remote-help-desk/how-it-works" target="_blank" label="How It Works" />
              <NavLink color={theme.colors.neutral.xs} href="/imoncall-remote-help-desk/features" target="_blank" label="Features" />
              <NavLink color={theme.colors.neutral.xs} href="/imoncall-remote-help-desk/support" label="Support" />
              <NavLink color={theme.colors.neutral.xs} href="/imoncall-remote-help-desk/pricing-comparison" label="Pricing & Comparison" />
              <NavLink color={theme.colors.neutral.xs} href="/imoncall-remote-help-desk/benefits" label="Benefits" />
              <NavLink color={theme.colors.neutral.xs} href="/imoncall-remote-help-desk/pricing-comparison" label="Tell a Friend" />
              <NavLink color={theme.colors.neutral.xs} href="/imoncall-remote-help-desk/pricing-comparison" label="Connect to an Agent" />
            </>
          }
        </Box>
        <NavLogin isNavBarLight={false} isIIT={true} />
      </NavBarContainer>
    </>
  )
}
