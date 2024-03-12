import styled from "styled-components"
import { Box, Text } from "../../../components/core"
import Head from "next/head"
import IITLayout from "../../../components/im-in-touch/IITLayout"
import Link from "next/link"
import { theme } from "../../../theme"
import { useWindowSize } from "usehooks-ts"
import { breakpoints } from "../../../utils/breakpoints"
import { IITMainBanner } from "../../../components/im-in-touch/IITMainBanner"
import Heading from "../../../components/core/heading"
import { IITProductCard } from "../../../components/im-in-touch/IITProductCard"

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
  { 800: 'left' },
])}
${breakpoints("padding", "", [
  { 800: '0' },
])}
${breakpoints("font-size", "", [
  { 800: '24px' },
])}
${breakpoints("line-height", "", [
  { 800: '40px' },
])}
`

const ProductsCardContainer = styled(Box)`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
width: 888px;
max-width:100%;
grid-gap: 24px;
margin-bottom: 96px;
${breakpoints("grid-template-columns", "", [
  { 800: '1fr' },
])}

${breakpoints("margin-bottom", "", [
  { 960: '48px' },
])}
@media screen and (max-width: 800px) {
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

export default function GoHome() {
  return (
    <IITLayout subSite="go">
      <Head>
        <title>Remote Desktop Connection & Control Software | 01com.com</title>
        <meta name="description" content="Remote access software for online meetings, web conferencing software, remote PC access software and remote IT support including help desk software and online training solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IITMainBanner isCarousel={false} banner="go" />

      <HeadingContainer>
        <StyledHeading>Turn your Mobile Device into a Remote Control for your Computer</StyledHeading>
        <Text>I'm InTouch Go is a free mobile app that allows you to{' '}
          <StyledLink target="_blank" href="/imintouch-remote-pc-desktop/go/features/">
            remote control your computer
          </StyledLink>
          {' '}as if you were sitting in front of it without having to use an Internet browser. Now
          your remote computer with all your full-blown desktop applications are available at your fingertips.
          You can check your emails, edit your documents, work on your spreadsheet and any software program on
          your mobile device. No more frustration about application costs and incompatibility issues since no
          application is required to be resided at your mobile device. Also there is no more security risk as
          no confidential file is leaving your office environment.</Text>
        <Box margin="24px 0">
          <Text>Before you can use I'm InTouch Go, you must first activate your remote computer to become I'm InTouch-enabled.
            The activation process is as easy as 1-2-3. Simply click here to create
            a free <StyledLink target="_blank" href="https://locator.01com.com/ecommerce/account.php">30-day Trial Account.</StyledLink> Then from
            the computer you wish to activate, go to <StyledLink target="_blank" href="/imintouch-remote-pc-desktop">www.imintouch.com.</StyledLink> Login to the
            I'm InTouch account you have just created and follow the on-screen instructions to activate the computer.</Text>
        </Box>
      </HeadingContainer>
      <ProductsCardContainer>
        <IITProductCard variant='ios' hasDescription={true} />
        <IITProductCard variant='android' hasDescription={true} />
        <IITProductCard variant='tablet' hasDescription={true} />
      </ProductsCardContainer>
    </IITLayout >
  )
}
