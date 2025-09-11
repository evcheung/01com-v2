import styled from "styled-components"
import IOCLayout from "../../../components/im-on-call/IOCLayout"
import Head from "next/head"
import { IOCPageBanner } from "../../../components/im-on-call/IOCPageBanner"
import { PageContentContainer } from "../../../components/PageContentContainer"
import { Box, Text } from "../../../components/core"
import Image from "next/image"
import RemoteAudio from '../../../public/assets/remote-audio.jpg'

const StyledImage = styled(Image)`
height: 100%;
width:100%;
`

export default function RemoteTwoWayAudio() {
  return (
    <IOCLayout>
      <Head>
        <title>Remote Desktop Connection & Control Software | 01com.com</title>
        <meta name="description" content="Remote access software for online meetings, web conferencing software, remote PC access software and remote IT support including help desk software and online training solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IOCPageBanner heading="Remote 2-Way Audio" />
      <PageContentContainer>
        <Text>
          I'm InTouch allows you to stream audio from the speakers on the remote computer to your local computer. It also allows you to stream the microphone input on the local computer to your remote computer.
        </Text>
        <Box margin="48px 0 0 0">
          <StyledImage src={RemoteAudio.src} alt="I'm in Touch screen with audio setting button" width={100} height={548} />
        </Box>
      </PageContentContainer>
    </IOCLayout>
  )
}
