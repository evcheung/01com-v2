import styled from "styled-components"
import IOCLayout from "../../../components/im-on-call/IOCLayout"
import Head from "next/head"
import { IOCPageBanner } from "../../../components/im-on-call/IOCPageBanner"
import { PageContentContainer } from "../../../components/PageContentContainer"
import { Box, Text } from "../../../components/core"
import Image from "next/image"
import RemoteControlImage from '../../../public/assets/desktop-screen.png'
import RMC from '../../../public/assets/remote-control-ioc.png'

const StyledImage = styled(Image)`
height: 100%;
width:100%;
`

export default function RemoteControl() {
  return (
    <IOCLayout>
      <Head>
        <title>Remote Desktop Connection & Control Software | 01com.com</title>
        <meta name="description" content="Remote access software for online meetings, web conferencing software, remote PC access software and remote IT support including help desk software and online training solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IOCPageBanner heading="Remote Control" iconSrc={RMC} />

      <PageContentContainer>
        <Text>
          As a support agent, nothing is more effective than temporarily taking remote control of your customers' computers to resolve their technical issues. In addition to controlling the screen you may also do remote file transfer.
        </Text>
        <Box margin="48px 0 0 0">
          <StyledImage src={RemoteControlImage.src} alt="one computer signalling to many" width={100} height={548} />
        </Box>
      </PageContentContainer>
    </IOCLayout>
  )
}
