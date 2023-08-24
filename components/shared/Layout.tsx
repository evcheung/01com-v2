import { Footer } from 'components/global/Footer'
import { Navbar } from 'components/global/Navbar'
import PreviewNavbar from 'components/global/PreviewNavbar'
import { PreviewBanner } from 'components/preview/PreviewBanner'
import IntroTemplate from 'intro-template'
import { SettingsPayload } from 'types'

const fallbackSettings: SettingsPayload = {
  menuItems: [],
  footer: [],
}

export interface LayoutProps {
  children: React.ReactNode
  settings: SettingsPayload | undefined
  preview?: boolean
  loading?: boolean
}

export default function Layout({
  children,
}: LayoutProps) {
  return (
    <div className={`flex min-h-screen flex-col bg-white text-black`}>
      {/* <Navbar menuItems={settings?.menuItems} /> */}
      <Navbar />

      <div>{children}</div>
      <Footer />
    </div>
  )
}
