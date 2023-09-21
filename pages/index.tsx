import Layout from '../components/Layout'
import { MainBanner } from '../components/MainBanner'
import { PressCard } from '../components/PressCard'
import Head from 'next/head'
import { Box, ButtonColors, PrimaryButton } from '../components/core'
import Heading, { HeadingVariants } from '../components/core/heading'
import Link from 'next/link'
import styled from 'styled-components'
import Image from 'next/image'
import livechat from '../public/assets/live-chat.svg'
import { breakpoints } from '../utils/breakpoints'

const LiveChatButton = styled(Link)`
  position: fixed;
  bottom: 24px;
  right: 24px;
`

const LatestNewsContainer = styled(Box)`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
column-gap: 24px;
width: 100%;
${breakpoints("grid-template-columns", "", [
  { 1180: "1fr 1fr" },
  { 760: "1fr" },
])}
@media screen and (max-width: 1180px) {
  div:last-child {
    display: none;
  }
}
@media screen and (max-width: 760px) {
  div:nth-child(2) {
    display: none;
  }
}
`

const FeaturedNewsHeading = styled(Heading)`
  &&& {
    font-size: 36px;
    ${breakpoints("font-size", "", [
  { 1180: "32px" },
])}
  }
`

const MainBannerContainer = styled(Box)`
 margin: 48px 0;
 ${breakpoints("margin", "", [
  { 760: "0" },
])}
`

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Post-Quantum Cybersecurity | 01com.com</title>
        <meta name="description" content="Remote access software for online meetings, web conferencing software, remote PC access software and remote IT support including help desk software and online training solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainBannerContainer margin="48px 0px" width="100%">
        <MainBanner />
      </MainBannerContainer>

      <Box margin="-28px 0px 96px 0px" width="100%">
        <Box flexDirection='row' width='100%' flexJustify='space-between' flexAlignment='center' margin="0px 0px 20px 0px">
          <FeaturedNewsHeading variant={HeadingVariants.Heading1}>Featured News</FeaturedNewsHeading>
          <Link href="/press-releases">
            <PrimaryButton btnColor={ButtonColors.Blue}>View All</PrimaryButton>
          </Link>
        </Box>

        <LatestNewsContainer width='100%'>
          <PressCard date="September 1, 2023" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit" link="/" />
          <PressCard date="September 1, 2023" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit" link="/" />
          <PressCard date="September 1, 2023" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit" link="/" />
        </LatestNewsContainer>
      </Box>

      <LiveChatButton href="#" target="_blank" onClick={() => { window.open('https://imoncall.01com.com/pre-sales/', 'pagename', 'resizable,height=600,width=500'); return false; }}>
        <Image src={livechat} alt="chat bubble" />
      </LiveChatButton>
    </Layout >
  )
}
