import styled from "styled-components"
import IOCLayout from "../../../components/im-on-call/IOCLayout"
import Head from "next/head"
import { IOCPageBanner } from "../../../components/im-on-call/IOCPageBanner"
import { PageContentContainer } from "../../../components/PageContentContainer"
import { Box, Text } from "../../../components/core"
import Image from "next/image"
import LDAP from '../../../public/assets/ldap.jpg'

const StyledImage = styled(Image)`
height: 100%;
width:100%;
`

export default function LDAPAuthentication() {
  return (
    <IOCLayout>
      <Head>
        <title>Remote Desktop Connection & Control Software | 01com.com</title>
        <meta name="description" content="Remote access software for online meetings, web conferencing software, remote PC access software and remote IT support including help desk software and online training solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IOCPageBanner heading="LDAP Authentication" />
      <PageContentContainer>
        <Text>
          I'm InTouch allows you to optionally select to authenticate through a corporate LDAP (Lightweight Directory Access Protocol) environment. This effectively allows IT managers to maintain a single password management protocol and policy.
        </Text>
        <Box margin="48px 0 0 0">
          <StyledImage src={LDAP.src} alt="screen asking for LDAP credentials" width={100} height={548} />
        </Box>
      </PageContentContainer>
    </IOCLayout>
  )
}
