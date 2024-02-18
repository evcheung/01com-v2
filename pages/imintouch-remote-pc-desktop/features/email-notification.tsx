import styled from "styled-components"
import IITLayout from "../../../components/im-in-touch/IITLayout"
import Head from "next/head"
import { IITPageBanner } from "../../../components/im-in-touch/IITPageBanner"
import { PageContentContainer } from "../../../components/PageContentContainer"
import { Box, Text } from "../../../components/core"
import Image from "next/image"
import EmailNotificationImage from '../../../public/assets/email-notification.png'
import GoMail from '../../../public/assets/go-mail.png'

const StyledImage = styled(Image)`
height: 100%;
width:100%;
`

export default function EmailNotification() {
  return (
    <IITLayout>
      <Head>
        <title>Remote Desktop Connection & Control Software | 01com.com</title>
        <meta name="description" content="Remote access software for online meetings, web conferencing software, remote PC access software and remote IT support including help desk software and online training solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IITPageBanner heading="Notification of Important Emails" />
      <PageContentContainer>
        <Text>
          Real-time Notification can be configured to notify you on your mobile device when new emails arrive at your Outlook inbox. It can also be configured to receive notifications from certain email senders only. Hence, you can eliminate junk mail notifications.
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
          <StyledImage src={EmailNotificationImage.src} alt="email push notifications on mobile and tablet" width={100} height={548} />
        </Box>
      </PageContentContainer>
    </IITLayout>
  )
}
