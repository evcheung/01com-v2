
import { ReactNode } from 'react';
import { FooterNav } from '../FooterNav'
import { NavBar, NavBarVariants } from '../NavBar'
import { PageHeader } from '../PageBanner';
import { Container, Main } from '../sharedstyles'
import { IITNavBar } from './IITNavBar';

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
        {variant === LayoutVariants.Light ?
          <IITNavBar variant={NavBarVariants.Light} />
          :
          <PageHeader label={pageTitle}>
            {headerContent}
          </PageHeader>
        }
        {children}
        <FooterNav />
      </Main>
    </Container >
  )
}
