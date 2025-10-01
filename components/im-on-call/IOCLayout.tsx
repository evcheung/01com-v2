
import { ReactNode } from 'react';
import { NavBar, NavBarVariants } from '../NavBar'
import { Container, Main } from '../sharedstyles'
import { IOCNavBar } from './IOCNavBar';
import { IOCFooterNav } from './IOCFooterNav';
import { useWindowSize } from 'usehooks-ts';

export enum LayoutVariants {
  Dark = "Dark",
  Light = "Light"
}

export interface LayoutProps {
  variant?: LayoutVariants;
  pageTitle?: string;
  headerContent?: ReactNode;
  children: ReactNode;
  subSite?: 'go' | 'gomail' | 'server' | 'securekey';
}

export default function IITLayout({
  variant = LayoutVariants.Light,
  children,
  subSite
}: LayoutProps) {
  const { width } = useWindowSize()

  return (
    // TODO: add variant for Container to lower texture on dark navbar. Texture has to show through
    <Container>
      <Main>
        <IOCNavBar variant={NavBarVariants.Dark} subSite={subSite} width={width} />
        {children}
        <IOCFooterNav width={width} />
      </Main>
    </Container >
  )
}
