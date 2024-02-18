import styled from "styled-components"
import IITLayout from "../../../components/im-in-touch/IITLayout"
import Head from "next/head"
import { IITPageBanner } from "../../../components/im-in-touch/IITPageBanner"
import { PageContentContainer } from "../../../components/PageContentContainer"
import { Box, Text } from "../../../components/core"
import Image from "next/image"
import RemoteControlImage from '../../../public/assets/remote-control.jpg'

const StyledImage = styled(Image)`
height: 100%;
width:100%;
`

export default function RemoteControl() {
  return (
    <IITLayout>
      <Head>
        <title>Remote Desktop Connection & Control Software | 01com.com</title>
        <meta name="description" content="Remote access software for online meetings, web conferencing software, remote PC access software and remote IT support including help desk software and online training solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IITPageBanner heading="Remote Control" />
      <PageContentContainer>
        <Text>
          I'm InTouch lets you work remotely by controlling your office computer as if you are physically in the office. You can control your distant computer from any other Windows computer or a mobile device such as an iPhone, iPad, Android, or Windows Tablet from any part of the world with an Internet connection.
        </Text>
        <Box margin="48px 0 0 0">
          <StyledImage src={RemoteControlImage.src} alt="one computer signalling to many" width={100} height={548} />
        </Box>
      </PageContentContainer>
    </IITLayout>
  )
}
