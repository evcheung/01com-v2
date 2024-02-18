import styled from "styled-components"
import IITLayout from "../../../components/im-in-touch/IITLayout"
import Head from "next/head"
import { IITPageBanner } from "../../../components/im-in-touch/IITPageBanner"
import { PageContentContainer } from "../../../components/PageContentContainer"
import { Box, Text } from "../../../components/core"
import Image from "next/image"
import RemoteWakeUp from '../../../public/assets/remote-wakeup.jpg'

const StyledImage = styled(Image)`
height: 100%;
width:100%;
`

export default function RemoteWakeup() {
  return (
    <IITLayout>
      <Head>
        <title>Remote Desktop Connection & Control Software | 01com.com</title>
        <meta name="description" content="Remote access software for online meetings, web conferencing software, remote PC access software and remote IT support including help desk software and online training solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IITPageBanner heading="Remote Wakeup" />
      <PageContentContainer>
        <Text>
          I'm InTouch allows you to remotely power on your computer by using the remote wakeup feature. This means you may shutdown your computer when you are not using it in order to save on energy and maximize security.
        </Text>
        <Box margin="48px 0 0 0">
          <StyledImage src={RemoteWakeUp.src} alt="screen prompting to wake up the remote computer" width={100} height={548} />
        </Box>
      </PageContentContainer>
    </IITLayout>
  )
}
