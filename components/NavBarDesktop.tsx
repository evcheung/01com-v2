import Logo from 'public/assets/01com-logo.png'
import Image from 'next/image'
import { ButtonColors, PrimaryButton, Box, Text, TextVariants } from './core'
import { theme } from '../theme'
import styled from 'styled-components'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { breakpoints } from '../utils/breakpoints'
import { NavBarVariants } from './NavBar'

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
`

export const NavLink = ({ href, label, color, target = "_self" }) => (
  <Link href={href} target={target} passHref legacyBehavior>
    <AnchorContainer>
      <StyledA color={color}>{label}</StyledA>
    </AnchorContainer>
  </Link>
)

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
    padding: "14px 68px",
  })};
  ${breakpoints("padding", "", [
    { 1240: "12px 32px" },
  ])}
`

const StyledLoginMenuContainer = styled(Box) <{
  onClickOutside: () => void
}>`
background: ${theme.colors.neutral.xs};
position: absolute;
right: 68px;
top: 81px;
z-index: 2;
display: grid;
grid-template-rows: 1fr 1fr 1fr;
row-gap: 24px;
  :before {
  content: '';
  width: 138px;
  height: 4px;
  background: ${theme.colors.neutral.xl};
  position: absolute;
  top: 0;
  right: 0;
}
`

const LogoContainer = styled(Image)`
  ${breakpoints("width", "", [
  { 1160: "80px" },
])}
  ${breakpoints("height", "", [
  { 1160: "auto" },
])}
`

const StyledLoginButton = styled(PrimaryButton) <{ isNavBarLight: boolean }>`
padding: 16px 48px;
color: ${props => props.isNavBarLight ? theme.colors.neutral.xs : theme.colors.brand.primary};
${breakpoints("padding", "", [
  { 1160: "12px 32px" },
])}
`

const LoginMenuContainer = ({ onClickOutside }) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [onClickOutside]);

  return (
    <StyledLoginMenuContainer padding="24px" onClickOutside={onClickOutside} ref={ref}>
      <Link href='https://www.01com.com/imintouch-remote-pc-desktop/login/?'>
        <Text variant={TextVariants.Feat2}>Access My PC</Text>
      </Link>
      <Link href='https://www.01com.com/imoncall-remote-help-desk/login/?'>
        <Text variant={TextVariants.Feat2}>I'm OnCall Agent</Text>
      </Link>
      <Link href='https://www.01com.com/imoncall-remote-help-desk/connect/?'>
        <Text variant={TextVariants.Feat2}>Connect An Agent</Text>
      </Link>
    </StyledLoginMenuContainer>
  )
}

export const NavBarDesktop = ({
  variant
}: {
  variant?: NavBarVariants
}) => {
  const isLight = variant === NavBarVariants.Light
  const navLinkColor = isLight ? theme.colors.neutral.xl : theme.colors.neutral.xs;
  const [isLoginMenuActive, setIsLoginMenuActive] = useState(false)
  const clickHandler = () => setIsLoginMenuActive(!isLoginMenuActive)
  const clickOutsideHandler = () => setIsLoginMenuActive(false)

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
          <NavLink color={navLinkColor} href="https://www.ironcap.ca/" target="blank" label="IronCAP™" />
          <NavLink color={navLinkColor} href="https://www.ironcap.ca/ironcap-x" target="blank" label="IronCAP X™" />
          <NavLink color={navLinkColor} href="https://www.01com.com/imintouch-remote-pc-desktop/" label="I'm InTouch" />
          <NavLink color={navLinkColor} href="https://www.01com.com/imoncall-remote-help-desk/" label="I'm OnCall" />
          <NavLink color={navLinkColor} href="/support" label="Support" />
          <NavLink color={navLinkColor} href="/intellectual-properties" label="Intellectual Properties" />
        </Box>
        <StyledLoginButton
          btnColor={isLight ? ButtonColors.Blue : ButtonColors.White}
          onClick={clickHandler}
          isNavBarLight={isLight}
        >
          Login
        </StyledLoginButton>
        {isLoginMenuActive && <LoginMenuContainer onClickOutside={clickOutsideHandler} />}
      </NavBarContainer>

    </>
  )
}
