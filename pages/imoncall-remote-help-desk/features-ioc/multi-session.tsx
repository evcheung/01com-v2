import styled from "styled-components"
import IOCLayout from "../../../components/im-on-call/IOCLayout"
import Head from "next/head"
import { IOCPageBanner } from "../../../components/im-on-call/IOCPageBanner"
import { PageContentContainer } from "../../../components/PageContentContainer"
import { Box, Text } from "../../../components/core"
import Image from "next/image"
import MultiSessionImage from '../../../public/assets/conference-ioc.png'
import AgentImage from '../../../public/assets/agent-ioc.png'

const StyledImage = styled(Image)`
height: 100%;
width:100%;
`

export default function MultiMonitor() {
  return (
    <IOCLayout>
      <Head>
        <title>Remote Desktop Connection & Control Software | 01com.com</title>
        <meta name="description" content="Remote access software for online meetings, web conferencing software, remote PC access software and remote IT support including help desk software and online training solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IOCPageBanner heading="Multi-session" iconSrc={MultiSessionImage.src}/>
      <PageContentContainer>
        <Text>
          Agents can chat with many customers at the same time.
        </Text>
        <Box margin="48px 0 0 0">
          <StyledImage src={AgentImage.src} alt="two monitors remote controlling the same computer" width={100} height={548} />
        </Box>
      </PageContentContainer>
    </IOCLayout>
  )
}
