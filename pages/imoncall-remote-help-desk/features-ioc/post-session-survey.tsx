import styled from "styled-components"
import IOCLayout from "../../../components/im-on-call/IOCLayout"
import Head from "next/head"
import { IOCPageBanner } from "../../../components/im-on-call/IOCPageBanner"
import { PageContentContainer } from "../../../components/PageContentContainer"
import { Box, Text } from "../../../components/core"
import Image from "next/image"
import PostSurveyImage from '../../../public/assets/survey-ioc.png'
import SurveyImage from '../../../public/assets/post-ioc.png'

const StyledImage = styled(Image)`
height: 100%;
width:100%;
`

export default function MACAddressRestriction() {
  return (
    <IOCLayout>
      <Head>
        <title>Remote Desktop Connection & Control Software | 01com.com</title>
        <meta name="description" content="Remote access software for online meetings, web conferencing software, remote PC access software and remote IT support including help desk software and online training solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IOCPageBanner heading="Post-session Survey" iconSrc={SurveyImage.src} />
      <PageContentContainer>
        <Text>
          I'm InTouch allows you to optionally restrict access from only the computer with a specific MAC address (e.g. a specific laptop computer). This essentially imposes a strong restriction in such a way that even your password has been compromised, the bad actor still cannot access without using your designated laptop computer.
        </Text>
        <Box margin="48px 0 0 0">
          <StyledImage src={PostSurveyImage.src} alt="screen with Mac address violation error" width={100} height={548} />
        </Box>
      </PageContentContainer>
    </IOCLayout>
  )
}
