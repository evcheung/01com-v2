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

type IOCNavBarMobileProps = {
  variant?: NavBarVariants;
  subSite?: 'go' | 'gomail' | 'server' | 'securekey';
};

export const IOCNavBarMobile: React.FC<IOCNavBarMobileProps> = ({ variant, subSite }) => {
  const isLight = variant === NavBarVariants.Light;

  return (
    <>
      <NavBarContainer
        flexDirection='row'
        flexJustify='space-between'
        flexAlignment='center'
      >
        {/* … your existing JSX … */}

        <Link href="/imoncall-remote-help-desk" style={{ zIndex: 2000 }}>
          <LogoContainer src={IOCLogo} alt="I'm OnCall homepage, click to return to main menu" />
        </Link>

        <NavLogin isNavBarLight={false} isIIT={true} />
      </NavBarContainer>
    </>
  );
};

