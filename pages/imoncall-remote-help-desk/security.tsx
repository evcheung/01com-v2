import styled from "styled-components"
import { Box, Text, TextVariants, PrimaryButton, ButtonTextColors, SecondaryButton, TextColors } from "../../components/core"
import { IOCAnchor, AnchorVariants } from "../../components/core/ioc-anchor";
import { breakpoints } from "../../utils/breakpoints"
import Head from "next/head"
import IOCLayout from "../../components/im-on-call/IOCLayout"
import { IOCPageBanner } from "../../components/im-on-call/IOCPageBanner"
import { IOCContentCard } from "../../components/im-on-call/IOCContentCard"
import DC from "../../public/assets/data-center-ioc.png"
import DB from "../../public/assets/database-ioc.png"
import ENC from "../../public/assets/encryption-ioc.png"
import RMC from "../../public/assets/remote-control-1.png"
import SEC from "../../public/assets/security-ioc.png"


import { LINKS } from "../../utils/constants"
import Link from "next/link";

export const revalidate = 10
// export const dynamic = 'force-dynamic'



const ContentGrid = styled(Box)`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 24px;
width: 100%;
${breakpoints("grid-template-columns", "", [
  { 900: '1fr 1fr' },
])}
${breakpoints("grid-template-columns", "", [
  { 600: '1fr' },
])}
`

export default function Applications() {
  return (
    <IOCLayout>
      <Head>
        <title>Remote Desktop Connection & Control Software | 01com.com</title>
        <meta name="description" content="Remote access software for online meetings, web conferencing software, remote PC access software and remote IT support including help desk software and online training solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IOCPageBanner heading="Security">
        <Box flexDirection="row" flexAlignment="center" margin="24px 0 0 0">

          <a href={LINKS.IOC_USER_GUIDE}>
            <PrimaryButton textColor={ButtonTextColors.Green}>
              User's Guides
            </PrimaryButton>
          </a>
          <a href={LINKS.IOC_FAQ}>
            <SecondaryButton>FAQ</SecondaryButton>
          </a>
        </Box>
      </IOCPageBanner>

      <Box margin="96px 0">
        <ContentGrid>
          <IOCContentCard
            title="Secure Data Center"
            description="Our data centers are located at facilities that have 24-hour physical security, redundant electrical generators, and other backup equipment designed to keep servers continually up and running. The network is protected by multiple firewalls and monitored by intrusion detection systems."
            imageSrc={DC.src}>
            </IOCContentCard>
          <IOCContentCard
            title="256-bit SSL Data Encryption"
            description={
              <>
                The I'm OnCall Help Desk Software uses 256-bit SSL encryption for each {' '}
                <Link href="./features-ioc/remote-control" style={{textDecoration: "underline"}}>remote IT support session</Link>
                {' '} which ensures customer privacy and data protection. This has the same level of security utilized by most bank institutions.
              </>
            }
            imageSrc={ENC.src}>
          </IOCContentCard>
          <IOCContentCard
            title="Existing Network Security Settings Maintained"
            description={
              <>
                The {' '}
                <Link href="./how-it-works" style={{textDecoration: "underline"}}>I'm OnCall Help Desk Software</Link>
                {' '}does not require any firewall port on the technicians' or the customers' computers to be opened.
              </>
            }
            imageSrc={SEC.src}>
          </IOCContentCard>
          <IOCContentCard
            title="Remote Control of Customers Computers Requires Permission"
            description="Technicians cannot access their customers' computers unless the customers have expressly granted them the permission. This is achieved by either having the customer enter a Session Code provided by the technician or click a link in the I'm OnCall authorization email sent by the technician."
            imageSrc={DB.src}>
          </IOCContentCard>
          <IOCContentCard
            title="Temporary Access to Customer's Computer"
            description={
              <>
                Both the customers and the technicians can terminate the {' '}
                <Link href="./features-ioc/remote-control" style={{textDecoration: "underline"}}>remote control session</Link>
                {' '}any time. Once terminated, everything related to the remote control session will be removed leaving no trace for maximum security and privacy.
              </>
            }
            imageSrc={RMC.src}>
          </IOCContentCard>
        </ContentGrid>
      </Box>
    </IOCLayout>
  )
}
