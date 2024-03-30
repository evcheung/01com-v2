import Layout, { LayoutVariants } from '../components/Layout'
import Head from 'next/head'
import { Box, Text, TextVariants } from '../components/core';
import Heading, { HeadingVariants } from '../components/core/heading';
import styled from 'styled-components';
import { theme } from '../theme';
import { PageContentContainer } from '../components/PageContentContainer';
import { Anchor, AnchorVariants } from '../components/core/anchor';
import { LiveChatButton } from '../components/LiveChatButton';
import { ReactNode } from 'react';
import { breakpoints } from '../utils/breakpoints';
import { useWindowSize } from 'usehooks-ts';

const ContactsColumnGrid = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
  margin-top: 32px;
  ${breakpoints("display", "", [
  { 800: "flex" },
])}
  ${breakpoints("flex-direction", "", [
  { 800: "column" },
])}
`
const ContactsRowGrid = styled(Box)`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-gap: 24px;
  height: fit-content;
  ${breakpoints("display", "", [
  { 800: "flex" },
])}
    ${breakpoints("flex-direction", "", [
  { 800: "column" },
])}
`
const StyledText = styled(Text)`
  margin-bottom: 48px;
`

const StyledContactContainer = styled(Box)`
  background-color: ${theme.colors.neutral.xs};
  padding: 32px;
  height: fit-content;
  ${props => props.id === 'phone' && `
    margin-top: -48px;
    height: 223px;
  `}

  ${breakpoints("margin", "", [
  { 800: "0" },
])}

  ${breakpoints("height", "", [
  { 800: "auto" },
])}
`
const LiveChatButtonColumnGrid = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
`
const StyledHeading = styled(Heading)`
margin: 0 0 8px 0;
}
`
const ContactSubText = styled(Text)`
font-size: 12px;
font-weight: ${theme.fontWeight[300]};
text-align: left;
line-height:24px;
width:100%;
`

const InfoColumnGrid = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 88px;
  padding: 0px 32px;
  
  ${breakpoints("margin-top", "", [
  { 800: "32px" },
])}
  ${breakpoints("padding", "", [
  { 800: "0" },
])}
  ${breakpoints("grid-template-columns", "", [
  { 800: "1fr" },
])}
  ${breakpoints("grid-gap", "", [
  { 800: "32px" },
])}
`

const HorizontalBorder = styled(Box)`
  border-bottom: 1px solid ${theme.colors.neutral.md};
  width: 100%;
  margin: 12px 0px;
`

const ContactContainer = ({ heading, children, id }: { heading: string, children: ReactNode, id?: string }) => {
  return (
    <StyledContactContainer id={id}>
      <StyledHeading variant={HeadingVariants.Heading3}>{heading}</StyledHeading>
      <Box width="100%">
        {children}
      </Box>
    </StyledContactContainer>
  )
}

export default function Support() {
  const { width } = useWindowSize()
  return (
    <Layout variant={LayoutVariants.Dark} pageTitle="General Support">
      <Head>
        <title>Remote Desktop Software Press and Reviews</title>
        <meta name="description" content="Reviews and press coverage for I'm InTouch remote desktop software and remote control software solutions including 'Product of the Year 2012' award." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContentContainer>
        <StyledText variant={TextVariants.Body1}>Contact our knowledgeable staff anytime for immediate assistance. Whether you need technical support while operating one of our programs or have questions regarding pricing or features of our remote access and remote control software, we are available at your convenience.</StyledText>

        <StyledText variant={TextVariants.Body1}>For presales support, our product specialists will recommend you the appropriate solutions based on your industry or personal needs. Find out how to mobilize your computer, operate your Outlook as a mobile mailbox, provide remote support to your customers, conduct online presentations/meetings, or do home/child monitoring.</StyledText>

        <ContactsColumnGrid>
          <ContactsRowGrid>
            <ContactContainer heading="Live Chat">
              <Box margin="0px 0px 16px 0px">
                <Text variant={TextVariants.Feat1}>(powered by I'm OnCall):</Text>
              </Box>
              <LiveChatButtonColumnGrid>
                <LiveChatButton variant="pre-sales" />
                <LiveChatButton variant="after-sales" />
              </LiveChatButtonColumnGrid>
            </ContactContainer>
            <ContactContainer heading="Office Hours">
              <Text variant={TextVariants.Feat1}>Monday - Friday 9am to 6pm EST</Text>
            </ContactContainer>
          </ContactsRowGrid>
          <ContactsRowGrid>
            <ContactContainer heading="Email" >
              <Anchor href="mailto:help@01com.com">help@01com.com</Anchor>
            </ContactContainer>
            <ContactContainer heading="Phone" id="phone">
              <Box flexDirection='row' flexAlignment='center' flexJustify="space-between" style={{ maxWidth: '340px' }}>
                <Box>
                  <ContactSubText>Sales (Toll-Free):</ContactSubText>
                  <Anchor href="tel:1-800-668-2185">1-800-668-2185</Anchor>
                </Box>
                <Box style={{ borderRight: `1px dotted ${theme.colors.neutral.md}`, height: '46px' }}></Box>
                <Box>
                  <ContactSubText>Tech Support:</ContactSubText>
                  <Anchor href="tel:905-795-2888">(905) 795-2888</Anchor>
                </Box>
              </Box>
            </ContactContainer>
          </ContactsRowGrid>
        </ContactsColumnGrid>

        <InfoColumnGrid>
          <Box>
            <Box margin="0 0 8px 0">
              <StyledHeading variant={HeadingVariants.Heading3}>User's Guides</StyledHeading>
            </Box>
            <HorizontalBorder />
            <Anchor href="https://www.01com.com/01com/ironcap-x/webhelp/index.htm#t=IronCAP_X%2FWelcome_to_IronCap_X.htm">IronCAP X™</Anchor>
            <HorizontalBorder />
            <Anchor href="https://www.01com.com/01com/imintouch/webhelp/desktop/index.htm">I'm InTouch</Anchor>
            <HorizontalBorder />
            <Anchor href="https://www.01com.com/01com/imoncall/webhelp/desktop/welcome.htm">I'm OnCall</Anchor>
            <HorizontalBorder />
          </Box>
          <Box>
            <Box margin="0 0 8px 0">
              <StyledHeading variant={HeadingVariants.Heading3}>FAQ's</StyledHeading>
            </Box>
            <HorizontalBorder />
            <Anchor href="https://www.ironcap.ca/ironcap-x/faq/">IronCAP X™</Anchor>
            <HorizontalBorder />
            <Anchor href="https://www.ironcap.ca/ironcap-api/faq/">IronCAP™ Toolkits</Anchor>
            <HorizontalBorder />
            <Anchor href="/imintouch-remote-pc-desktop/faqs/">I'm InTouch</Anchor>
            <HorizontalBorder />
            <Anchor href="/imoncall-remote-help-desk/faqs">I'm OnCall</Anchor>
            <HorizontalBorder />
          </Box>
        </InfoColumnGrid>
      </PageContentContainer>
    </Layout>
  )
}
