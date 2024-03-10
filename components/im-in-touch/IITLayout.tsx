
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
}

export default function IITLayout({
  variant = LayoutVariants.Light,
  pageTitle,
  headerContent,
  children,
}: LayoutProps) {
  return (
    // TODO: add variant for Container to lower texture on dark navbar. Texture has to show through
    <Container>
      {/* <Navbar menuItems={settings?.menuItems} /> */}
      <Main>
        <IITNavBar variant={NavBarVariants.Dark} />

        {children}
        <IITFooterNav />
      </Main>
    </Container >
  )
}
