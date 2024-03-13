import Head from "next/head";
import styled from "styled-components";
import { Box, Text, TextColors } from "../../../../components/core";
import { breakpoints } from "../../../../utils/breakpoints";
import { IITPageBanner } from "../../../../components/im-in-touch/IITPageBanner";
import IITLayout from "../../../../components/im-in-touch/IITLayout";
import { theme } from "../../../../theme";
import Heading, { HeadingVariants } from "../../../../components/core/heading";
import Attachments from '../../../../public/assets/gomail-feature-attachments.jpg'
import Outlook from '../../../../public/assets/gomail-feature-outlook.jpg'
import Notification from '../../../../public/assets/gomail-feature-notification.jpg'
import Image from "next/image";
import Link from "next/link";

const FeaturesGrid = styled(Box)`
display: grid;
grid-template-columns: 1fr;
gap: 24px;
width: 100%;
`

const FeatureCard = styled(Box)`
background: ${theme.colors.neutral.xs};
width: 100%;
padding: 48px;
display: flex;
align-items: center;
> div {
  margin: 0 0 0 48px;
  ${breakpoints("margin", "", [
  { 620: '36px 0 0 0' },
])}
}

${breakpoints("flex-direction", "", [
  { 620: 'column' },
])}
${breakpoints("align-items", "", [
  { 620: 'flex-start' },
])}
${breakpoints("padding", "", [
  { 1180: '32px 24px' },
])}
  ${breakpoints("padding", "", [
  { 900: '32px 24px' },
])}
`
const StyledImage = styled(Image)`
width: 242px;
height: auto;`

const StyledLink = styled(Link)`
text-decoration: underline;`


export default function GoMailFeaturesHome() {
  return (
    <IITLayout subSite="gomail">
      <Head>
        <title>Remote Desktop Connection & Control Software | 01com.com</title>
        <meta name="description" content="Remote access software for online meetings, web conferencing software, remote PC access software and remote IT support including help desk software and online training solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IITPageBanner heading="Features">
        <Text textColor={TextColors.White}>Unlike other mobile mailbox services, I'm InTouch GoMail lets you keep your emails on your computer. Your data will not be duplicated onto your mobile device or any cloud storage. This not only maximizes your data security/privacy but also eliminates third party cloud storage fee.</Text>
      </IITPageBanner>
      <Box margin="96px 0">
        <FeaturesGrid>
          <FeatureCard>
            <StyledImage src={Attachments.src} alt="attachment management panel in app" width={200} height={200} />
            <Box margin="0px 0 0 48px">
              <Heading variant={HeadingVariants.Heading3}>Handling of Attachments</Heading>
              <Box margin="16px 0 0 0">
                <Text>Doing this on your mobile device is finally a reality. Using I'm InTouch GoMail you can insert attachments from your computer's local/network drives or save inbound attachments in the same way without having to leave them on any third party's cloud storage.</Text>
              </Box>
              <Box margin="16px 0 0 0">
                <Text>Since all your files are 100% staying within your premises you can rest with the peace of mind that your confidential data is save and private.</Text>
              </Box>
            </Box>
          </FeatureCard>
          <FeatureCard>
            <StyledImage src={Outlook.src} alt="outlook email app inbox" width={200} height={200} />
            <Box >
              <Heading variant={HeadingVariants.Heading3}>Real-time Operation</Heading>
              <Box margin="16px 0 0 0">
                <Text>Ensures every <StyledLink href="/imintouch-remote-pc-desktop/gomail/how-it-works" target="_blank">remote access activity</StyledLink> you are doing on your
                  I'm InTouch GoMail (e.g. composing a new message, replying a message, etc.)
                  is concurrent with your Outlook. For example, after reading a message it will
                  be marked as "read" on your Outlook at the I'm InTouch-enabled computer. From
                  the same token, replying a message from your mobile device will actually be sending
                  it out via Outlook at your I'm InTouch-enabled computer and therefore will be
                  logged in the "Sent Items" record thereafter.</Text>
              </Box>
            </Box>
          </FeatureCard>
          <FeatureCard>
            <StyledImage src={Notification.src} alt="push notification of new I'm InTouch GoMail" width={200} height={200} />
            <Box >
              <Heading variant={HeadingVariants.Heading3}>Notification</Heading>
              <Box margin="16px 0 0 0">
                <Text>Notifications to your mobile device are in real-time. When a new email is received by Outlook on your I'm InTouch-enabled computer an instant notification message will be sent to your mobile device. Simply click on the notification, I'm InTouch GoMail will automatically access your Outlook to open the message for your further actions such as read, reply, forward, delete, etc.</Text>
              </Box>
              <Box margin="16px 0 0 0">
                <Text>You may even configure I'm InTouch to send notification only when emails from certain senders are received. This means you will not be bothered by unimportant messages.</Text>
              </Box>
            </Box>
          </FeatureCard>
        </FeaturesGrid>
      </Box>
    </IITLayout>
  );
}
