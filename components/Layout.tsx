
import { FooterNav } from './FooterNav'
import { NavBar } from './NavBar'
import { Container, Main } from './sharedstyles'

// const fallbackSettings: SettingsPayload = {
//   menuItems: [],
//   footer: [],
// }

export interface LayoutProps {
  children: React.ReactNode
  //   settings: SettingsPayload | undefined
  //   preview?: boolean
  //   loading?: boolean
}

export default function Layout({
  children,
}: LayoutProps) {
  return (
    <Container>
      <Main>

        {/* <Navbar menuItems={settings?.menuItems} /> */}
        <NavBar />

        {children}
        <FooterNav />
        {/* <Footer /> */}
      </Main>
    </Container>
  )
}
