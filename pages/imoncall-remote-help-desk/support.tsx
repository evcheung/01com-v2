import styled from "styled-components"
import { Box, Text, TextVariants, TextColors, PrimaryButton, SecondaryButton, ButtonTextColors, ButtonSizes, IOCButton } from "../../components/core"
import Head from "next/head"
import IOCLayout from "../../components/im-on-call/IOCLayout"
import Heading, { HeadingVariants } from "../../components/core/heading"
import { theme } from "../../theme"
import Link from "next/link"
import { IOCPageBanner } from "../../components/im-on-call/IOCPageBanner"
import { PageContentContainer } from "../../components/PageContentContainer"
import { ReactNode } from "react"
import bullet from '../../public/assets/gbullet.png'
import { breakpoints } from "../../utils/breakpoints"
import { IOCAnchor } from "../../components/core/ioc-anchor"
import { LINKS } from "../../utils/constants"
import IOCChat from "../../public/assets/ioc-chat.png"
import Image from "next/image"

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

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-top: 12px;
`;


export default function Support() {
  return (
    <IOCLayout>
      <Head>
        <title>Remote Desktop Connection & Control Software | 01com.com</title>
        <meta name="description" content="Remote access software for online meetings, web conferencing software, remote PC access software and remote IT support including help desk software and online training solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IOCPageBanner heading="General Support">
        <Text variant={TextVariants.Body1} textColor={TextColors.White}>The I'm OnCall {' '}
          <Link href="./features" style={{textDecoration: "underline"}}>
            remote IT support service
          </Link>
           {' '} technology is hosted in our secure data center. You don't need to invest in any expensive new hardware or software. Be our subscriber and you can focus on delivering superb support services to your valuable customers in no time. It is that easy and affordable!</Text>
        <Box flexDirection="row" flexAlignment="center" margin="24px 0 0 0">
          <Link href={LINKS.IOC_USER_GUIDE} target="_blank">
            <PrimaryButton textColor={ButtonTextColors.Green}>
              User's Guide
            </PrimaryButton>
          </Link>
          <Link href="./faqs">
            <SecondaryButton>FAQ</SecondaryButton>
          </Link>
        </Box>
      </IOCPageBanner>
      <PageContentContainer>

        <ContactContainer>
          <Box>
            <ContactSubText>Live Chat (powered by I'm OnCall):</ContactSubText>
            <ButtonGroup>
              <IOCButton btnWidth="148px" btnHeight="48px">
                <Image src={IOCChat} alt="chat icon" />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: '14px' }}>
                  <Text variant={TextVariants.Body2} style={{ fontWeight: "700", marginBottom: "-4px" }}>
                    Live Chat
                  </Text>
                  <Text variant={TextVariants.Body2}>(pre-sales)</Text>
                </div>
              </IOCButton>

              <IOCButton btnWidth="128px" btnHeight="48px">
                <Image src={IOCChat} alt="chat icon" />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: '14px' }}>
                  <Text variant={TextVariants.Body2} style={{ fontWeight: "700", marginBottom: "-4px" }}>
                    Live Chat
                  </Text>
                  <Text variant={TextVariants.Body2}>(after-sales)</Text>
                </div>
              </IOCButton>
            </ButtonGroup>



          </Box>
          <Border />

          <Box>
            <ContactSubText>Sales (Toll-Free):</ContactSubText>
            <IOCAnchor href="tel:1-800-668-2185">1-800-668-2185</IOCAnchor>
          </Box>
          <Border />

          <Box>
            <ContactSubText>Tech Support:</ContactSubText>
            <IOCAnchor href="tel:905-795-8166">(905) 795-8166</IOCAnchor>
          </Box>
          <Border />

          <Box>
            <ContactSubText>Email:</ContactSubText>
            <IOCAnchor target="_blank" href="mailto:help@01com.com">help@01com.com</IOCAnchor>
          </Box>
        </ContactContainer>

        <ContactContainer>
          <Box>
            <ContactSubText>Office Hours</ContactSubText>
            <Text variant={TextVariants.Body2}>Monday - Friday 9am to 6pm EST</Text>
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
