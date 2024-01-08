import styled from "styled-components"
import { Box, Text, TextVariants, TextColors, PrimaryButton, SecondaryButton, ButtonTextColors, ButtonSizes } from "../../components/core"
import Head from "next/head"
import IITLayout from "../../components/im-in-touch/IITLayout"
import Heading, { HeadingVariants } from "../../components/core/heading"
import { theme } from "../../theme"
import { Anchor } from "../../components/core/anchor"
import Link from "next/link"
import { IITPageBanner } from "../../components/im-in-touch/IITPageBanner"
import { PageContentContainer } from "../../components/PageContentContainer"
import { ReactNode } from "react"
import bullet from '../../public/assets/bullet.svg'
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
    <IITLayout>
      <Head>
        <title>Remote Desktop Connection & Control Software | 01com.com</title>
        <meta name="description" content="Remote access software for online meetings, web conferencing software, remote PC access software and remote IT support including help desk software and online training solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IITPageBanner heading="General Support">
        <Text variant={TextVariants.Body1} textColor={TextColors.White}>Contact our knowledgeable staff anytime for immediate assistance. Whether you need technical support while operating one of our programs or have questions regarding pricing or features of our remote access and remote control software, we are available at your convenience.</Text>
        <Box flexDirection="row" flexAlignment="center" margin="24px 0 0 0">
          <PrimaryButton textColor={ButtonTextColors.Blue}>
            <Link href='/imintouch-remote-pc-desktop/users-guide/'>User's Guide</Link>
          </PrimaryButton>
          <SecondaryButton> <Link href='/imintouch-remote-pc-desktop/faqs/'>FAQ</Link></SecondaryButton>
        </Box>
      </IITPageBanner>
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
            <Anchor href="tel:1-800-668-2185">1-800-668-2185</Anchor>
          </Box>
          <Border />

          <Box>
            <ContactSubText>Email:</ContactSubText>
            <Anchor href="mailto:help@01com.com">help@01com.com</Anchor>
          </Box>
        </ContactContainer>

        <Box margin='48px 0 0 0'>
          <StyledHeading variant={HeadingVariants.Heading3}>System Requirements</StyledHeading>
          <StyledList>
            <StyledLineItem><Text variant={TextVariants.Body2}>Windows Server, Windows 7, 8, 10, and 11 (32-bit or 64-bit)</Text></StyledLineItem>
            <StyledLineItem><Text variant={TextVariants.Body2}>Minimum 40M+ free disk space</Text></StyledLineItem>
            <StyledLineItem><Text variant={TextVariants.Body2}>Outlook 2003+ (for Outlook mobilization features)</Text></StyledLineItem>
            <StyledLineItem><Text variant={TextVariants.Body2}>Edge, Google Chrome, Firefox, Internet Explorer</Text></StyledLineItem>
            <StyledLineItem><Text variant={TextVariants.Body2}>Mobile app: I'm InTouch Go for iOS, Android, and Windows Tablet</Text></StyledLineItem>
            <StyledLineItem><Text variant={TextVariants.Body2}>Mobile app: I'm InTouch GoMail for iOS and Android</Text></StyledLineItem>
          </StyledList>
        </Box>
        <Box margin='48px 0 0 0'>
          <StyledHeading variant={HeadingVariants.Heading3}>Remote wake-up feature requirement</StyledHeading>
          <Text variant={TextVariants.Body2}>This feature requires a minimum of 2 computers on the same wired network with I'm InTouch installed and at least one of them must be "on".</Text>
        </Box>

      </PageContentContainer>
    </IITLayout>
  )
}
