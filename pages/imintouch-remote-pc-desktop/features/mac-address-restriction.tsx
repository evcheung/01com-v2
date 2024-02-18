import styled from "styled-components"
import IITLayout from "../../../components/im-in-touch/IITLayout"
import Head from "next/head"
import { IITPageBanner } from "../../../components/im-in-touch/IITPageBanner"
import { PageContentContainer } from "../../../components/PageContentContainer"
import { Box, Text } from "../../../components/core"
import Image from "next/image"
import MacAddress from '../../../public/assets/mac-address.jpg'

const StyledImage = styled(Image)`
height: 100%;
width:100%;
`

export default function MACAddressRestriction() {
  return (
    <IITLayout>
      <Head>
        <title>Remote Desktop Connection & Control Software | 01com.com</title>
        <meta name="description" content="Remote access software for online meetings, web conferencing software, remote PC access software and remote IT support including help desk software and online training solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IITPageBanner heading="MAC Address Restriction" />
      <PageContentContainer>
        <Text>
          I'm InTouch allows you to optionally restrict access from only the computer with a specific MAC address (e.g. a specific laptop computer). This essentially imposes a strong restriction in such a way that even your password has been compromised, the bad actor still cannot access without using your designated laptop computer.
        </Text>
        <Box margin="48px 0 0 0">
          <StyledImage src={MacAddress.src} alt="screen with Mac address violation error" width={100} height={548} />
        </Box>
      </PageContentContainer>
    </IITLayout>
  )
}
