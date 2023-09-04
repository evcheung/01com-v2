
import { ReactNode } from 'react';
import { FooterNav } from './FooterNav'
import { NavBar } from './NavBar'
import { PageHeader } from './PageBanner';
import { Container, Main } from './sharedstyles'

// const fallbackSettings: SettingsPayload = {
//   menuItems: [],
//   footer: [],
// }

export enum LayoutVariants {
  Dark = "Dark",
  Light = "Light"
}

export interface LayoutProps {
  variant?: LayoutVariants;
  pageTitle?: string;
  headerContent?: ReactNode;
  children: ReactNode;
  //   settings: SettingsPayload | undefined
  //   preview?: boolean
  //   loading?: boolean
}

export default function Layout({
  variant = LayoutVariants.Light,
  pageTitle,
  headerContent,
  children,
}: LayoutProps) {
  return (
    <Container>
      {/* <Navbar menuItems={settings?.menuItems} /> */}
      <Main>
        {variant === LayoutVariants.Light ?
          <NavBar />
          :
          <PageHeader label={pageTitle}>
            {headerContent}
          </PageHeader>
        }
        {children}
        <FooterNav />
      </Main >
    </Container >
  )
}
