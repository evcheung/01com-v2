import styled from "styled-components"
import IITLayout from "../../../components/im-in-touch/IITLayout"
import Head from "next/head"
import { IITPageBanner } from "../../../components/im-in-touch/IITPageBanner"
import { PageContentContainer } from "../../../components/PageContentContainer"
import { Box, Text } from "../../../components/core"
import Image from "next/image"
import OutlookAccessImage from '../../../public/assets/outlook-access.png'
import GoMail from '../../../public/assets/go-mail.png'

const StyledImage = styled(Image)`
height: 100%;
width:100%;
`

export default function OutlookAccess() {
  return (
    <IITLayout>
      <Head>
        <title>Remote Desktop Connection & Control Software | 01com.com</title>
        <meta name="description" content="Remote access software for online meetings, web conferencing software, remote PC access software and remote IT support including help desk software and online training solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IITPageBanner heading="Access your Outlook Inbox" />
      <PageContentContainer>
        <Text>
          I'm InTouch allows you to open, read, and operate your Outlook Inbox remotely. Everything you read, compose, reply, etc. will be instantly reflected on your Outlook at your remote computer. This feature is handy when using in conjunction with the notification feature.
        </Text>
        <Box flexDirection="row" flexAlignment="center" flexJustify="flex-start" margin="24px 0">
          <Image src={GoMail.src} width={48} height={48} alt="gomail app icon" />
          <Box margin="0 0 0 16px">
            <Text>
              * You need to download the free I'm InTouch GoMail app in order to use this feature.
            </Text>
          </Box>
        </Box>
        <Box margin="48px 0 0 0">
          <StyledImage src={OutlookAccessImage.src} alt="email apps on mobile and tablet" width={100} height={548} />
        </Box>
      </PageContentContainer>
    </IITLayout>
  )
}
