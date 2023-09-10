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

const LiveChatButton = styled(Link)`
  position: fixed;
  bottom: 24px;
  right: 24px;
`

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Post-Quantum Cybersecurity | 01com.com</title>
        <meta name="description" content="Remote access software for online meetings, web conferencing software, remote PC access software and remote IT support including help desk software and online training solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box margin="48px 0px" width="100%">
        <MainBanner />
      </Box>

      <Box margin="-28px 0px 96px 0px" width="100%">
        <Box flexDirection='row' width='100%' flexJustify='space-between' flexAlignment='center' margin="0px 0px 20px 0px">
          <Heading variant={HeadingVariants.Heading1} style={{ fontSize: '36px' }}>Featured News</Heading>
          <Link href="/press-releases">
            <PrimaryButton btnColor={ButtonColors.Blue}>View All</PrimaryButton>
          </Link>
        </Box>

        <Box style={{ display: 'grid', gridTemplateColumns: "1fr 1fr 1fr", columnGap: '24px' }} width='100%'>
          <PressCard date="September 1, 2023" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit" link="/" />
          <PressCard date="September 1, 2023" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit" link="/" />
          <PressCard date="September 1, 2023" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit" link="/" />
        </Box>
      </Box>

      <LiveChatButton href="#" target="_blank" onClick={() => { window.open('https://imoncall.01com.com/pre-sales/', 'pagename', 'resizable,height=600,width=500'); return false; }}>
        <Image src={livechat} alt="chat bubble" />
      </LiveChatButton>
    </Layout >
  )
}
