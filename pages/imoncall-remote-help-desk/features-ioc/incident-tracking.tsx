import styled from "styled-components"
import IOCLayout from "../../../components/im-on-call/IOCLayout"
import Head from "next/head"
import { IOCPageBanner } from "../../../components/im-on-call/IOCPageBanner"
import { PageContentContainer } from "../../../components/PageContentContainer"
import { Box, Text } from "../../../components/core"
import Image from "next/image"
import IncidentIOC from '../../../public/assets/tracking-ioc.png'
import IncidentImage from '../../../public/assets/incident-ioc.png'

const StyledImage = styled(Image)`
height: 100%;
width:100%;
`

export default function EmailNotification() {
  return (
    <IOCLayout>
      <Head>
        <title>Remote Desktop Connection & Control Software | 01com.com</title>
        <meta name="description" content="Remote access software for online meetings, web conferencing software, remote PC access software and remote IT support including help desk software and online training solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IOCPageBanner heading="Incident Tracking" iconSrc={IncidentIOC.src}/>
      <PageContentContainer>
        <Text>
          Your agents or service representatives can view all open incidents including time stamping, priority and categories. Closed incidents are also available via the History feature.
        </Text>
        <Box margin="48px 0 0 0">
          <StyledImage src={IncidentImage.src} alt="email push notifications on mobile and tablet" width={100} height={548} />
        </Box>
      </PageContentContainer>
    </IOCLayout>
  )
}
