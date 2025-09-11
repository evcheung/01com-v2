import styled from "styled-components"
import IOCLayout from "../../../components/im-on-call/IOCLayout"
import Head from "next/head"
import { IOCPageBanner } from "../../../components/im-on-call/IOCPageBanner"
import { PageContentContainer } from "../../../components/PageContentContainer"
import { Box, Text } from "../../../components/core"
import { breakpoints } from "../../../utils/breakpoints"
import { theme } from "../../../theme"
import Image from "next/image"
import TwoFA from '../../../public/assets/2FA.jpg'

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

      <IOCPageBanner heading="2-Factor Authentication" />
      <PageContentContainer>
        <Text>I'm InTouch allows you to opt for a 2nd factor one-time password (OTP) authentication. This is a very effective 2nd line of defense in case your password has been breached.</Text>
        <Box margin="48px 0 0 0">
          <StyledImage src={TwoFA.src} alt="two factor authentication screen prompting for 6 digit auth code" width={100} height={548} />
        </Box>
      </PageContentContainer>
    </IOCLayout>
  )
}
