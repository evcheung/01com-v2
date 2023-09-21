import Logo from 'public/assets/01com-logo.png'
import Image from 'next/image'
import { ButtonColors, PrimaryButton, Box, Text, TextVariants } from './core'
import { theme } from '../theme'
import styled from 'styled-components'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { NavBarVariants } from './NavBar'
import { slide as Menu } from 'react-burger-menu'

const StyledA = styled.a`
  font-size: ${theme.fontSize.sm};
  font-weight: ${theme.fontWeight[600]};
  cursor: pointer;
  margin: 0;
  padding: 0;
  color: ${props => props.color};
`

const AnchorContainer = styled(Box)`
padding: 24px 16px;
`

const AnchorDivider = styled(Box)`
border-bottom: 1px solid ${theme.colors.neutral.md};
width: 100%;
`

export const NavLink = ({ href, label, color, target = "_self" }) => (
  <StyledA color={color}>
    <Link href={href} target={target} passHref legacyBehavior>
      <AnchorContainer>
        {label}
      </AnchorContainer>
    </Link>
  </StyledA>
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
  return navBarVariantMap.get(props.variant)
}

const NavBarContainer = styled(Box) <NavBarContainerProps>`
  ${props => ({
    ...getNavBarVariant(props),
    width: "100vw",
    padding: "12px 16px",
  })};
`

const StyledLoginMenuContainer = styled(Box) <{
  onClickOutside: () => void
}>`
background: ${theme.colors.neutral.xs};
position: absolute;
right: 16px;
top: 65px;
z-index: 2;
display: grid;
grid-template-rows: 1fr 1fr 1fr;
row-gap: 24px;
  :before {
  content: '';
  width: 90px;
  height: 4px;
  background: ${theme.colors.neutral.xl};
  position: absolute;
  top: 0;
  right: 0;
}
`

const LogoContainer = styled(Image)`
  width: 80px;
  height: auto;
`

const StyledLoginButton = styled(PrimaryButton) <{ isNavBarLight: boolean }>`
padding: 10px 24px;
color: ${props => props.isNavBarLight ? theme.colors.neutral.xs : theme.colors.brand.primary};
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


export const NavBarMobile = ({
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

        <Menu styles={{
          bmBurgerButton: {
            position: 'relative',
            width: '30px',
            height: '20px',
            // left: '30px',
            // top: '24px'
          },
          bmBurgerBars: {
            background: `${theme.colors.neutral.xl}`,
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
            zIndex: 1100,
          },
          bmMenu: {
            background: theme.colors.neutral.xs,
            opacity: '100%',
            padding: '70px 0 0 0',
          },
          bmMorphShape: {
            fill: theme.colors.neutral.xs,
          },
          bmItemList: {
            color: theme.colors.neutral.sm,
            // padding: '20px'
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
            <NavLink color={navLinkColor} href="https://www.ironcap.ca/" target="blank" label="IronCAP™" />
            <AnchorDivider />

            <NavLink color={navLinkColor} href="https://www.ironcap.ca/ironcap-x" target="blank" label="IronCAP X™" />
            <AnchorDivider />

            <NavLink color={navLinkColor} href="https://www.01com.com/imintouch-remote-pc-desktop/" label="I'm InTouch" />
            <AnchorDivider />

            <NavLink color={navLinkColor} href="https://www.01com.com/imoncall-remote-help-desk/" label="I'm OnCall" />
            <AnchorDivider />

            <NavLink color={navLinkColor} href="/support" label="Support" />
            <AnchorDivider />

            <NavLink color={navLinkColor} href="/intellectual-properties" label="Intellectual Properties" />
            <AnchorDivider />

          </Box>
        </Menu>
        <Link href="/" style={{ zIndex: 2000 }}>
          <LogoContainer src={Logo} alt="01com logo, click to return home" />
        </Link>
        <StyledLoginButton
          btnColor={isLight ? ButtonColors.Blue : ButtonColors.White}
          onClick={clickHandler}
          isNavBarLight={isLight}
        >
          Login
        </StyledLoginButton>
        {isLoginMenuActive && <LoginMenuContainer onClickOutside={clickOutsideHandler} />}
      </NavBarContainer >

    </>
  )
}
