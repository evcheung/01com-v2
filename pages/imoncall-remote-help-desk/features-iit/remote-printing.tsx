import styled from "styled-components"
import IOCLayout from "../../../components/im-on-call/IOCLayout"
import Head from "next/head"
import { IOCPageBanner } from "../../../components/im-on-call/IOCPageBanner"
import { PageContentContainer } from "../../../components/PageContentContainer"
import { Box, Text } from "../../../components/core"
import Image from "next/image"
import RemotePrintingImage from '../../../public/assets/remote-printing.jpg'

const StyledImage = styled(Image)`
height: 100%;
width:100%;
`

export default function RemotePrinting() {
  return (
    <IOCLayout>
      <Head>
        <title>Remote Desktop Connection & Control Software | 01com.com</title>
        <meta name="description" content="Remote access software for online meetings, web conferencing software, remote PC access software and remote IT support including help desk software and online training solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IOCPageBanner heading="Remote Printing" />
      <PageContentContainer>
        <Text>
          Remote Printing enables you to print any document on your remote computer to a local printer. Simply select printing to the special "I'm InTouch Remote Printer".
        </Text>
        <Box margin="48px 0 0 0">
          <StyledImage src={RemotePrintingImage.src} alt="printer screen" width={100} height={548} />
        </Box>
      </PageContentContainer>
    </IOCLayout>
  )
}
