import Logo from 'public/assets/01com-logo.png'
import Image from 'next/image'
import { ButtonColors, PrimaryButton, Box, ButtonTextColors } from './core'
import { theme } from '../theme'
import styled from 'styled-components'
import Link from 'next/link'

export enum NavBarVariants {
  Dark = "Dark",
  Light = "Light"
}

const StyledA = styled.a`
  font-size: ${theme.fontSize.sm};
  font-weight: ${theme.fontWeight[600]};
  cursor: pointer;
  margin: 0;
  padding: 0;
  color: ${props => props.color}
`

export const NavLink = ({ href, label, color, target = "_self" }) => (
  <Link href={href} target={target} passHref legacyBehavior>
    <Box margin="0px 24px">
      <StyledA color={color}>{label}</StyledA>
    </Box>
  </Link>
)
interface NavBarContainerProps {
  variant: NavBarVariants
}


const navBarVariantMap = new Map<NavBarVariants, React.CSSProperties>([
  [NavBarVariants.Light, {
    backgroundColor: theme.colors.neutral.xs
  }],
  [NavBarVariants.Dark, {
    background: `${theme.colors.neutral.xl}88`,
    borderBottom: `1px solid ${theme.colors.neutral.xs}50`
  }]
])

const getNavBarVariant = (props: NavBarContainerProps) => {
  return navBarVariantMap.get(props.variant)
}

const NavBarContainer = styled(Box) <NavBarContainerProps>`
  ${props => ({
    ...getNavBarVariant(props)
  })};
`

export const NavBar = ({
  variant = NavBarVariants.Light
}: {
  variant?: NavBarVariants
}) => {
  const isLight = variant === NavBarVariants.Light
  const navLinkColor = isLight ? theme.colors.neutral.xl : theme.colors.neutral.xs;

  return (
    <NavBarContainer
      flexDirection='row'
      flexJustify='space-between'
      flexAlignment='center'
      width="100vw"
      padding="14px 68px"
      variant={variant}
    >
      <Link href="/" >
        <Image src={Logo} alt="01com logo, click to return home" />
      </Link>
      <Box flexDirection='row'>
        <NavLink color={navLinkColor} href="https://www.ironcap.ca/" target="blank" label="IronCAP" />
        <NavLink color={navLinkColor} href="https://www.ironcap.ca/ironcap-x" target="blank" label="IronCAP X" />
        <NavLink color={navLinkColor} href="/im-intouch" label="I'm InTouch" />
        <NavLink color={navLinkColor} href="/im-oncall" label="I'm OnCall" />
        <NavLink color={navLinkColor} href="/support" label="Support" />
        <NavLink color={navLinkColor} href="/intellectual-properties" label="Intellectual Properties" />
      </Box>
      <PrimaryButton
        padding="16px 48px"
        btnColor={isLight ? ButtonColors.Blue : ButtonColors.White}
        style={{ color: isLight ? theme.colors.neutral.xs : theme.colors.brand.primary }}>
        Login
      </PrimaryButton>
    </NavBarContainer>
  )
}
