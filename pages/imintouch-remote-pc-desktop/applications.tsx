import styled from "styled-components"
import { Box, PrimaryButton, ButtonTextColors, SecondaryButton } from "../../components/core"
import { breakpoints } from "../../utils/breakpoints"
import Head from "next/head"
import IITLayout from "../../components/im-in-touch/IITLayout"
import { IITPageBanner } from "../../components/im-in-touch/IITPageBanner"
import { IITContentCard } from "../../components/im-in-touch/IITContentCard"
import WFH from "../../public/assets/work-from-home.png"
import Mobile from "../../public/assets/responsive.png"
import Law from "../../public/assets/ethics.png"
import Sales from "../../public/assets/entrepreneurship.png"
import Travel from "../../public/assets/suitcase.png"
import ChildLock from "../../public/assets/child.png"
import { LINKS } from "../../utils/constants"

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
    <IITLayout>
      <Head>
        <title>Remote Desktop Connection & Control Software | 01com.com</title>
        <meta name="description" content="Remote access software for online meetings, web conferencing software, remote PC access software and remote IT support including help desk software and online training solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IITPageBanner heading="Applications">
        <Box flexDirection="row" flexAlignment="center" margin="24px 0 0 0">

          <a href={LINKS.IIT_BUY_NOW} target="_blank">
            <PrimaryButton textColor={ButtonTextColors.Blue}>
              Buy Now
            </PrimaryButton>
          </a>
          <a href={LINKS.IIT_TRY_IT_FREE} target="_blank">
            <SecondaryButton>Try It Free</SecondaryButton>
          </a>
        </Box>
      </IITPageBanner>

      <Box margin="96px 0">
        <ContentGrid>
          <IITContentCard
            title="Working From Home"
            description="Cannot be easier than remotely controlling your computer in the office as if you are physically there."
            imageSrc={WFH.src} />
          <IITContentCard
            title="Mobile Device Users"
            description="Can remote control their computers via our mobile apps and receive notifications when important emails arrive."
            imageSrc={Mobile.src} />
          <IITContentCard
            title="Lawyers and Accountants"
            description="Can ensure all their emails and files never have to leave their offices. Hence, no more risk of losing confidential data."
            imageSrc={Law.src} />
          <IITContentCard
            title="Sales Professionals"
            description="Can manage everything back at the distant computer from anywhere. No more sync or copy data."
            imageSrc={Sales.src} />
          <IITContentCard
            title="Travellers"
            description="Can enjoy anytime, anywhere remote access to their distant computers with no geographical boundary."
            imageSrc={Travel.src} />
          <IITContentCard
            title="Parents"
            description="Can monitor and control their child's usage of the Internet by watching their activities in real-time."
            imageSrc={ChildLock.src} />
        </ContentGrid>
      </Box>
    </IITLayout>
  )
}
