
import { ReactNode } from 'react';
import { NavBar, NavBarVariants } from '../NavBar'
import { Container, Main } from '../sharedstyles'
import { IITNavBar } from './IITNavBar';
import { IITFooterNav } from './IITFooterNav';

export enum LayoutVariants {
  Dark = "Dark",
  Light = "Light"
}

export interface LayoutProps {
  variant?: LayoutVariants;
  pageTitle?: string;
  headerContent?: ReactNode;
  children: ReactNode;
  subSite?: 'go' | 'gomail' | 'server';
}

export default function IITLayout({
  variant = LayoutVariants.Light,
  children,
  subSite
}: LayoutProps) {
  return (
    // TODO: add variant for Container to lower texture on dark navbar. Texture has to show through
    <Container>
      <Main>
        <IITNavBar variant={NavBarVariants.Dark} subSite={subSite} />
        {children}
        <IITFooterNav subSite={subSite} />
      </Main>
    </Container >
  )
}
