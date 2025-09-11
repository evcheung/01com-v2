import styled from "styled-components"
import { Box, Text, TextVariants, TextColors, PrimaryButton, SecondaryButton, ButtonTextColors, ButtonSizes } from "../../components/core"
import Head from "next/head"
import IOCLayout from "../../components/im-on-call/IOCLayout"
import Heading, { HeadingVariants } from "../../components/core/heading"
import { theme } from "../../theme"
import { Anchor } from "../../components/core/anchor"
import Link from "next/link"
import { IOCPageBanner } from "../../components/im-on-call/IOCPageBanner"
import { PageContentContainer } from "../../components/PageContentContainer"
import { ReactNode } from "react"
import bullet from '../../public/assets/gbullet.png'
import { breakpoints } from "../../utils/breakpoints"

const StyledContactContainer = styled(Box)`
  background-color: ${theme.colors.neutral.xs};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px;
  width: 100%;

${breakpoints("flex-direction", "", [
  { 900: 'column' },
])}
${breakpoints("align-items", "", [
  { 900: 'flex-start' },
])}
`

const ContactContainer = ({ children }: { children: ReactNode }) => {
  return (
    <StyledContactContainer>
      {children}
    </StyledContactContainer>
  )
}
const ContactSubText = styled(Text)`
font-size: 12px;
font-weight: ${theme.fontWeight[300]};
text-align: left;
line-height:24px;
width:100%;
`

const Border = styled(Box)`
border-left: 1px dotted ${theme.colors.neutral.md};
height: 46px;

${breakpoints("border-left", "", [
  { 900: 'none' },
])}
${breakpoints("border-bottom", "", [
  { 900: `1px dotted ${theme.colors.neutral.md}` },
])}
${breakpoints("width", "", [
  { 900: `100%` },
])}
${breakpoints("height", "", [
  { 900: `auto` },
])}
${breakpoints("margin", "", [
  { 900: `16px 0` },
])}
`
const StyledHeading = styled(Heading)`
margin: 0 0 16px 0;
}
`
const StyledLineItem = styled.li`
  background: url(${bullet.src}) no-repeat 0 4px;
  padding-left: 32px;
  margin-bottom: 16px;
`

const StyledList = styled.ul`
padding: 0;
list-style: none;
`

export default function Support() {
  return (
    <IOCLayout>
      <Head>
        <title>Remote Desktop Connection & Control Software | 01com.com</title>
        <meta name="description" content="Remote access software for online meetings, web conferencing software, remote PC access software and remote IT support including help desk software and online training solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IOCPageBanner heading="General Support">
        <Text variant={TextVariants.Body1} textColor={TextColors.White}>The I'm OnCall remote IT support service technology is hosted in our secure data center. You don't need to invest in any expensive new hardware or software. Be our subscriber and you can focus on delivering superb support services to your valuable customers in no time. It is that easy and affordable!</Text>
        <Box flexDirection="row" flexAlignment="center" margin="24px 0 0 0">
          <Link href='https://www.01com.com/01com/imintouch/webhelp/desktop/Welcome.htm' target="_blank">
            <PrimaryButton textColor={ButtonTextColors.Green}>
              User's Guide
            </PrimaryButton>
          </Link>
          <Link href='/imintouch-remote-pc-desktop/faqs/'>
            <SecondaryButton>FAQ</SecondaryButton>
          </Link>
        </Box>
      </IOCPageBanner>
      <PageContentContainer>

        <ContactContainer>
          <Box>
            <ContactSubText>Office Hours</ContactSubText>
            <Text variant={TextVariants.Body2}>Monday - Friday 9am to 6pm EST</Text>
          </Box>
          <Border />

          <Box>
            <ContactSubText>Sales (Toll-Free):</ContactSubText>
            <Anchor href="tel:1-800-668-2185">1-800-668-2185</Anchor>
          </Box>
          <Border />

          <Box>
            <ContactSubText>Tech Support:</ContactSubText>
            <Anchor href="tel:905-795-8166">(905) 795-8166</Anchor>
          </Box>
          <Border />

          <Box>
            <ContactSubText>Email:</ContactSubText>
            <Anchor target="_blank" href="mailto:help@01com.com">help@01com.com</Anchor>
          </Box>
        </ContactContainer>

        <Box margin='48px 0 0 0'>
          <StyledHeading variant={HeadingVariants.Heading3}>System Requirements for Agents (Windows only):</StyledHeading>
          <StyledList>
            <StyledLineItem><Text variant={TextVariants.Body2}>"Always-on" high-speed Internet connection)</Text></StyledLineItem>
            <StyledLineItem><Text variant={TextVariants.Body2}>Windows Server 2008+, Windows 7, 8, 10, 11</Text></StyledLineItem>
            <StyledLineItem><Text variant={TextVariants.Body2}>Latest version of Edge, Google, Chrome, Firefox</Text></StyledLineItem>
          </StyledList>
        </Box>
        <Box margin='48px 0 0 0'>
          <StyledList>
            <StyledHeading variant={HeadingVariants.Heading3}>System Requirements for End-users:</StyledHeading>
            <StyledLineItem><Text variant={TextVariants.Body2}>"Always-on" high-speed Internet connection</Text></StyledLineItem>
            <StyledLineItem><Text variant={TextVariants.Body2}>Windows Server 2008+, Windows 7, 8, 10, 11</Text></StyledLineItem>
            <StyledLineItem><Text variant={TextVariants.Body2}>OSX 10.5 "Leopard" or higher (Apple)</Text></StyledLineItem>
            <StyledLineItem><Text variant={TextVariants.Body2}>Latest version of Edge, Google, Chrome, Firefox</Text></StyledLineItem>
            <StyledLineItem><Text variant={TextVariants.Body2}>Latest version of Safari Internet browser (Apple)</Text></StyledLineItem>
          </StyledList>
        </Box>
      </PageContentContainer>
    </IOCLayout>
  )
}
