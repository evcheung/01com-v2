import styled from "styled-components"
import { Box, Text } from "../../../components/core"
import Head from "next/head"
import IITLayout from "../../../components/im-in-touch/IITLayout"
import Link from "next/link"
import { breakpoints } from "../../../utils/breakpoints"
import { IITMainBanner } from "../../../components/im-in-touch/IITMainBanner"
import Heading from "../../../components/core/heading"

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

export default function SecureKeyHome() {
  return (
    <IITLayout subSite="securekey">
      <Head>
        <title>Remote Desktop Connection & Control Software | 01com.com</title>
        <meta name="description" content="Remote access software for online meetings, web conferencing software, remote PC access software and remote IT support including help desk software and online training solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IITMainBanner isCarousel={false} banner="securekey" />

      <HeadingContainer>
        <StyledHeading>Ultimate Security for your I'm InTouch Remote PC Access</StyledHeading>
        <Text>
          I'm InTouch SecureKEY provides additional security to your remote access. This requires
          the user to insert an I'm InTouch SecureKEY (a USB device) as a physical authentication
          on top of the standard password protection. No two I'm InTouch SecureKEYs are the same.
          During activation your I'm InTouch SecureKEY is uniquely "bound" to your I'm InTouch-enabled
          computer. This ensures the holder of the I'm InTouch SecureKEY is the only one who
          can <StyledLink target="_blank" href="/imintouch-remote-pc-desktop/secure-key/how-it-works">remotely access</StyledLink> the
          "designated" I'm InTouch-enabled computer.</Text>
        <Box margin="24px 0">
          <Text>
            I'm InTouch SecureKEY can be assigned temporarily to occassional mobile employees or permanently
            to those requiring dedicated remote access to their computers.</Text>
        </Box>
        <Box margin="24px 0">
          <Text>Auto-Login can also be enabled to securely store the login password giving a quick connection by automating the login process.</Text>
        </Box>
        <Box margin="24px 0">
          <Text>You have to be a subscriber of
            our <StyledLink target="_blank" href="/imintouch-remote-pc-desktop/secure-key/how-it-works">I'm InTouch remote access service</StyledLink> in
            order to use this optional companion product. If you are not a subscriber yet,
            a <StyledLink target="_blank" href="https://locator.01com.com/ecommerce/account.php">free trial</StyledLink> is available.</Text>
        </Box>
        <Box margin="24px 0">
          <Text>For more information or to purchase your I'm InTouch SecureKEY, call 1-800-668-2185 or chat with our product specialists.</Text>
        </Box>
      </HeadingContainer>
    </IITLayout >
  )
}
