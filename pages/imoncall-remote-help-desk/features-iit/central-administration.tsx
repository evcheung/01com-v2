import styled from "styled-components"
import IOCLayout from "../../../components/im-on-call/IOCLayout"
import Head from "next/head"
import { IOCPageBanner } from "../../../components/im-on-call/IOCPageBanner"
import { PageContentContainer } from "../../../components/PageContentContainer"
import { Box, Text } from "../../../components/core"
import Image from "next/image"
import CentralAdministationImage from '../../../public/assets/central-admin.jpg'

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

      <IOCPageBanner heading="Central Administration" />
      <PageContentContainer>
        <Text>
          An I'm InTouch account allows unlimited scalability from a single user, small businesses with a few users, all the way to corporations with thousands of users. The central administration tools allow you to centrally manage every user, reset the access password, etc. The administrator can also group users according to branches, departments, etc. for easy administration purposes.
        </Text>
        <Box margin="48px 0 0 0">
          <StyledImage src={CentralAdministationImage.src} alt="admin panel for I'm in Touch" width={100} height={548} />
        </Box>
      </PageContentContainer>
    </IOCLayout>
  )
}
