import styled from "styled-components"
import IITLayout from "../../../components/im-in-touch/IITLayout"
import Head from "next/head"
import { IITPageBanner } from "../../../components/im-in-touch/IITPageBanner"
import { PageContentContainer } from "../../../components/PageContentContainer"
import { Box, Text } from "../../../components/core"
import Image from "next/image"
import MultiMonitorImage from '../../../public/assets/multi-monitor.jpg'

const StyledImage = styled(Image)`
height: 100%;
width:100%;
`

export default function MultiMonitor() {
  return (
    <IITLayout>
      <Head>
        <title>Remote Desktop Connection & Control Software | 01com.com</title>
        <meta name="description" content="Remote access software for online meetings, web conferencing software, remote PC access software and remote IT support including help desk software and online training solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IITPageBanner heading="Multi-monitor" />
      <PageContentContainer>
        <Text>
          I'm InTouch allows you to remote control a distant computer with up to 10 monitors connected. You can choose to see all the monitors at once or to select a particular one to display.
        </Text>
        <Box margin="48px 0 0 0">
          <StyledImage src={MultiMonitorImage.src} alt="two monitors remote controlling the same computer" width={100} height={548} />
        </Box>
      </PageContentContainer>
    </IITLayout>
  )
}
