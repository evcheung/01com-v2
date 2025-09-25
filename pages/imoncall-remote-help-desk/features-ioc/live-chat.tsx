import styled from "styled-components"
import IOCLayout from "../../../components/im-on-call/IOCLayout"
import Head from "next/head"
import { IOCPageBanner } from "../../../components/im-on-call/IOCPageBanner"
import { PageContentContainer } from "../../../components/PageContentContainer"
import { Box, Text, TextVariants, TextWeights } from "../../../components/core"
import Image from "next/image"
import LiveChatImageOne from '../../../public/assets/live-chat-1 copy.png'
import LiveChatImageTwo from '../../../public/assets/live-chat-2.png'
import LiveChatLogo from '../../../public/assets/live-chat-ioc.png'

const StyledImage = styled(Image)`
height: 100%;
width:100%;
`

export default function TwoFactorAuthentication() {
  return (
    <IOCLayout>
      <Head>
        <title>Remote Desktop Connection & Control Software | 01com.com</title>
        <meta name="description" content="Remote access software for online meetings, web conferencing software, remote PC access software and remote IT support including help desk software and online training solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IOCPageBanner heading="Live Chat" iconSrc={LiveChatLogo.src}/>
      <PageContentContainer>
        <Text style={{fontSize:"20px"}}>This essentially can eliminate your customer service phone lines. Your customers can submit live chat requests through a queue (clicking the Live-Chat button on your web site embedded with an URL given to you by I'm OnCall). Your agents simply pick up requests and perform real-time live chat with the customers via the Internet. Your customers may leave call-back requests if the queue is busy.</Text>
        <Box margin="48px 0 0 0">
            <Text variant={TextVariants.Body1} weight={TextWeights.Regular}>Agent's multi-session chat-screen</Text>
          <StyledImage src={LiveChatImageOne.src} alt="two factor authentication screen prompting for 6 digit auth code" width={100} height={548} />
        </Box>
        <Box margin="48px 0 0 0">
            <Text variant={TextVariants.Body1} weight={TextWeights.Regular}>Customer's chat-screen</Text>
          <StyledImage src={LiveChatImageTwo.src} alt="two factor authentication screen prompting for 6 digit auth code" width={100} height={548} />
        </Box>
      </PageContentContainer>
    </IOCLayout>
  )
}
