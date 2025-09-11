import styled from "styled-components"
import { Box, Text } from "../../../components/core"
import Head from "next/head"
import IITLayout from "../../../components/im-in-touch/IITLayout"
import Link from "next/link"
import { breakpoints } from "../../../utils/breakpoints"
import { IITMainBanner } from "../../../components/im-in-touch/IITMainBanner"
import Heading from "../../../components/core/heading"
import { IITProductCard } from "../../../components/im-in-touch/IITProductCard"
import { LINKS } from "../../../utils/constants"

const HeadingContainer = styled(Box)`
width: 888px;
margin: 84px auto 48px auto;
max-width:100%;
${breakpoints("width", "", [
  { 960: '100%' },
])}
${breakpoints("margin", "", [
  { 960: '48px auto 24px auto' },
])}
`
const StyledHeading = styled(Heading)`
text-align: center;
font-size: 36px;
line-height: 48px;
padding: 0px 96px;
margin-bottom: 24px;
${breakpoints("text-align", "", [
  { 600: 'left' },
])}
${breakpoints("padding", "", [
  { 600: '0' },
])}
${breakpoints("font-size", "", [
  { 600: '24px' },
])}
${breakpoints("line-height", "", [
  { 600: '40px' },
])}
`

const ProductsCardContainer = styled(Box)`
display: grid;
grid-template-columns: 1fr 1fr;
width: 888px;
max-width:100%;
grid-gap: 24px;
margin-bottom: 96px;
${breakpoints("grid-template-columns", "", [
  { 600: '1fr' },
])}

${breakpoints("margin-bottom", "", [
  { 960: '48px' },
])}
@media screen and (max-width: 600px) {
  > div {
    align-items: flex-start;
    > p {
      margin: 24px 0;
    }
    > div {
      margin: 0;

      > img {
        width: 64px;
        height: 64px;
      }
    }
  }
  p {
    margin: 0;
  }
  ol {
    margin: -12px 0 24px -16px;
  }
}
`

const StyledLink = styled(Link)`
text-decoration: underline;`

export default function GoMailHome() {
  return (
    <IITLayout subSite="gomail">
      <Head>
        <title>Remote Desktop Connection & Control Software | 01com.com</title>
        <meta name="description" content="Remote access software for online meetings, web conferencing software, remote PC access software and remote IT support including help desk software and online training solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IITMainBanner isCarousel={false} banner="gomail" />

      <HeadingContainer>
        <StyledHeading>A Revolutionary Mobile Mailbox</StyledHeading>
        <Text>
          Unlike other mobile mailbox services, I'm InTouch GoMail does not store any message on
          your device for enhanced security. It simply <StyledLink target="_blank" href="/imintouch-remote-pc-desktop/gomail/features/">mobilizes your Outlook</StyledLink> and
          lets you keep all your inbound and outbound emails securely on your own computer.
          When sending emails from your mobile device you can insert attachments from your
          computer's local/network drives or save inbound attachments in the same way without
          having to leave them on any third party's cloud storage. Hence, it maximizes data
          security/privacy plus no third party storage fee.</Text>
        <Box margin="24px 0">
          <Text>With a smart notification feature, you can configure your I'm InTouch GoMail to receive
            real-time alerts at your mobile device when emails from certain pre-defined senders arrive
            at your Outlook. This means you will not be bothered by unimportant messages.</Text>
        </Box>
        <Box margin="24px 0">
          <Text>Before you can use I'm InTouch GoMail, you must first activate your Outlook computer to become
            I'm InTouch-enabled. The activation process is as easy as 1-2-3. Simply click here to create
            a <StyledLink href={LINKS.IIT_TRY_IT_FREE}>Free Account.</StyledLink> Then
            from the computer you wish to activate, go
            to <StyledLink target="_blank" href="/imintouch-remote-pc-desktop">www.imintouch.com.</StyledLink> Login
            to the I'm InTouch account you
            have just created and follow the on-screen instructions to activate the Outlook computer.</Text>
        </Box>
      </HeadingContainer>
      <ProductsCardContainer>
        <IITProductCard variant='ios' hasDescription={true} subSite={'gomail'} />
        <IITProductCard variant='android' hasDescription={true} subSite={'gomail'} />
      </ProductsCardContainer>
    </IITLayout >
  )
}
