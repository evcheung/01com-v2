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
export const IITNavBarMobile = ({
  variant,
  subSite
}: {
  variant?: NavBarVariants,
  subSite?: 'go' | 'gomail' | 'server' | 'securekey'
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
            {!subSite &&
              <>
                <AnchorDivider />
                <NavLink isMobile={true} color={theme.colors.neutral.xl} href="/imintouch-remote-pc-desktop/how-it-works" target="_blank" label="How It Works" />
                <AnchorDivider />

                <NavLink isMobile={true} color={theme.colors.neutral.xl} href="/imintouch-remote-pc-desktop/features" target="_blank" label="Features" />
                <AnchorDivider />

                <NavLink isMobile={true} color={theme.colors.neutral.xl} href="/imintouch-remote-pc-desktop/applications" label="Why I'm InTouch?" />
                <AnchorDivider />

                <NavLink isMobile={true} color={theme.colors.neutral.xl} href="/imintouch-remote-pc-desktop/support" label="Support" />
                <AnchorDivider />

                <NavLink isMobile={true} color={theme.colors.neutral.xl} href="/imintouch-remote-pc-desktop/pricing-comparison" label="Pricing & Comparison" />
              </>
            }
            {subSite === 'go' &&
              <>
                <AnchorDivider />
                <NavLink isMobile={true} color={theme.colors.neutral.xl} href="/imintouch-remote-pc-desktop/go/how-it-works" target="_blank" label="How It Works" />
                <AnchorDivider />

                <NavLink isMobile={true} color={theme.colors.neutral.xl} href="/imintouch-remote-pc-desktop/go/features" target="_blank" label="Features" />
              </>
            }
            {subSite === 'gomail' &&
              <>
                <AnchorDivider />
                <NavLink isMobile={true} color={theme.colors.neutral.xl} href="/imintouch-remote-pc-desktop/gomail/how-it-works" target="_blank" label="How It Works" />
                <AnchorDivider />

                <NavLink isMobile={true} color={theme.colors.neutral.xl} href="/imintouch-remote-pc-desktop/gomail/features" target="_blank" label="Features" />
              </>
            }
            {subSite === 'securekey' &&
              <>
                <AnchorDivider />
                <NavLink isMobile={true} color={theme.colors.neutral.xl} href="/imintouch-remote-pc-desktop/secure-key/how-it-works" target="_blank" label="How It Works" />
                <AnchorDivider />

                <NavLink isMobile={true} color={theme.colors.neutral.xl} href="/imintouch-remote-pc-desktop/secure-key/features" target="_blank" label="Features" />
              </>
            }
            {subSite === 'server' &&
              <>
                <AnchorDivider />
                <NavLink isMobile={true} color={theme.colors.neutral.xl} href="/imintouch-remote-pc-desktop/server/how-it-works" target="_blank" label="How It Works" />
                <AnchorDivider />

                <NavLink isMobile={true} color={theme.colors.neutral.xl} href="/imintouch-remote-pc-desktop/server/features" target="_blank" label="Features" />
                <AnchorDivider />

                <NavLink isMobile={true} color={theme.colors.neutral.xl} href="/imintouch-remote-pc-desktop/server/support" target="_blank" label="Support" />
                <AnchorDivider />

                <NavLink isMobile={true} color={theme.colors.neutral.xl} href="/imintouch-remote-pc-desktop/server/pricing-comparison" target="_blank" label="Pricing & Comparison" />

              </>
            }
            <AnchorDivider />
            <NavLink isMobile={true} color={theme.colors.neutral.xl} href="" label="Affiliated Products" />
            <Box padding="0 0 0 48px">
              <Link href="/imintouch-remote-pc-desktop/go"><Text textColor={TextColors.Neutral} variant={TextVariants.Feat3} style={{ margin: '-10px 0 18px 0' }}>I'm InTouch Go</Text></Link>
              <Link href="/imintouch-remote-pc-desktop/gomail"><Text textColor={TextColors.Neutral} variant={TextVariants.Feat3} style={{ margin: '0 0 18px 0' }}>I'm InTouch GoMail</Text></Link>
              <Link href="/imintouch-remote-pc-desktop/server"><Text textColor={TextColors.Neutral} variant={TextVariants.Feat3} style={{ margin: '0 0 18px 0' }}>I'm InTouch Server Edition</Text></Link>
              <Link href="/imintouch-remote-pc-desktop/secure-key"><Text textColor={TextColors.Neutral} variant={TextVariants.Feat3} style={{ margin: '0 0 18px 0' }}>I'm InTouch SecureKEY</Text></Link>
            </Box>
            <AnchorDivider />
          </Box>
        </Menu>
        <Link href={`/imintouch-remote-pc-desktop/${subSite}`} style={{ zIndex: 2000 }}>
          <LogoContainer src={!subSite ? IITLogo : getLogo(subSite)} alt="I'm InTouch product logo, click to return to main product page" />
        </Link>
        <NavLogin isNavBarLight={false} isIIT={true} />
      </NavBarContainer >
    </>
  )
}
