import styled from "styled-components"
import IOCLayout from "../../../components/im-on-call/IOCLayout"
import Head from "next/head"
import { IOCPageBanner } from "../../../components/im-on-call/IOCPageBanner"
import { PageContentContainer } from "../../../components/PageContentContainer"
import { Box, Text } from "../../../components/core"
import Image from "next/image"
import CustomizationImage from '../../../public/assets/customization-ioc.png'
import CustomizationIOC from '../../../public/assets/puzzle-ioc.png'

const StyledImage = styled(Image)`
height: 100%;
width:100%;
`

export default function CentralAdministration() {
  return (
    <IOCLayout>
      <Head>
        <title>Remote Desktop Connection & Control Software | 01com.com</title>
        <meta name="description" content="Remote access software for online meetings, web conferencing software, remote PC access software and remote IT support including help desk software and online training solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IOCPageBanner heading="Customization" iconSrc={CustomizationIOC.src}/>
      <PageContentContainer>
        <Text>
           A wide range of customization options including customizing your banner, agents' photos, etc. on the support session page are available in I'm OnCall.
        </Text>
        <Box margin="48px 0 0 0">
          <StyledImage src={CustomizationImage.src} alt="admin panel for I'm in Touch" width={100} height={548} />
        </Box>
      </PageContentContainer>
    </IOCLayout>
  )
}
