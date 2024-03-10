import styled from "styled-components"
import { Box, PrimaryButton, ButtonTextColors, SecondaryButton } from "../../components/core"
import { breakpoints } from "../../utils/breakpoints"
import Head from "next/head"
import IITLayout from "../../components/im-in-touch/IITLayout"
import { IITPageBanner } from "../../components/im-in-touch/IITPageBanner"
import { IITContentCard } from "../../components/im-in-touch/IITContentCard"
import IronCAP from "../../public/assets/ironcap.png"
import Database from "../../public/assets/database.png"
import Encryption from "../../public/assets/encryption.png"
import Firewall from "../../public/assets/firewall.png"
import Password from "../../public/assets/password.png"
import Shutdown from "../../public/assets/shutdown.png"
import SecurityLock from "../../public/assets/security.png"

export const revalidate = 10
// export const dynamic = 'force-dynamic'

const ContentGrid = styled(Box)`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
gap: 24px;
width: 100%;
${breakpoints("grid-template-columns", "", [
  { 1400: '1fr 1fr' },
])}
${breakpoints("grid-template-columns", "", [
  { 600: '1fr' },
])}
`

export default function Security() {
  return (
    <IITLayout>
      <Head>
        <title>Remote Desktop Connection & Control Software | 01com.com</title>
        <meta name="description" content="Remote access software for online meetings, web conferencing software, remote PC access software and remote IT support including help desk software and online training solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IITPageBanner heading="Zero-Trust Security">
        <Box flexDirection="row" flexAlignment="center" margin="24px 0 0 0">
          <a href="https://www.01com.com/pdf/I'm%20InTouch%20Security%20White%20Paper.pdf" target="_blank">
            <SecondaryButton>Security White Paper</SecondaryButton>
          </a>
        </Box>
      </IITPageBanner>



      <Box margin="96px 0">
        <ContentGrid>
          <IITContentCard
            description="By deploying the IronCAP Post-Quantum Cryptography, I'm InTouch will be the world's first quantum-safe remote access product. This R&D breakthrough ensures I'm InTouch is 100% secure all the way into the new quantum computing era."
            imageSrc={IronCAP.src} />
          <IITContentCard
            description="Two-Factor Authentication is an effective way to protect against the unlikely event of password breaches. I'm InTouch supports Google Authenticator One-Time Password (OTP)."
            imageSrc={Password.src} />
          <IITContentCard
            description="For maximum security, I'm InTouch lets you exert tight control of the access client. You can restrict remote access from devices with only certain MAC addresses."
            imageSrc={SecurityLock.src} />
          <IITContentCard
            description="I'm InTouch complies with the corporate LDAP environment for central password control policy and password management."
            imageSrc={Database.src} />
          <IITContentCard
            description="256-bit SSL Data Encryption ensures your transmitted data stays private with end-to-end encryption and authentication."
            imageSrc={Encryption.src} />
          <IITContentCard
            description="No Port needs to be opened on your firewall. This ensures your current security measures are not compromised during the remote desktop connection."
            imageSrc={Firewall.src} />
          <IITContentCard
            description="Remote Wake-Up allows you to shut down your remote computer when not in use and wake it up later when you need to use it."
            imageSrc={Shutdown.src} />
        </ContentGrid>
      </Box>
    </IITLayout>
  )
}
