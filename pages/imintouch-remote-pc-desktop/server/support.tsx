import Head from "next/head";
import styled from "styled-components";
import {
  Box,
  ButtonTextColors,
  PrimaryButton,
  SecondaryButton,
  Text,
  TextColors,
  TextVariants,
} from "../../../components/core";
import { breakpoints } from "../../../utils/breakpoints";
import { IITPageBanner } from "../../../components/im-in-touch/IITPageBanner";
import IITLayout from "../../../components/im-in-touch/IITLayout";
import Link from "next/link";
import Heading, { HeadingVariants } from "../../../components/core/heading";
import { PageContentContainer } from "../../../components/PageContentContainer";
import { theme } from "../../../theme";
import { Anchor } from "../../../components/core/anchor";
import bullet from "../../../public/assets/bullet.svg";
import { ReactNode } from "react";
import { LiveChatButton } from "../../../components/LiveChatButton";

const StyledLink = styled(Link)`
  text-decoration: underline;
`;

const StyledContactContainer = styled(Box)`
  background-color: ${theme.colors.neutral.xs};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 32px;
  width: 100%;

  ${breakpoints("flex-direction", "", [{ 900: "column" }])}
  ${breakpoints("align-items", "", [{ 900: "flex-start" }])}
`;

const StyledContactHeading = styled(Heading)`
margin: 0 0 16px 0;
}
`;
const ContactContainer = ({ children }: { children: ReactNode }) => {
  return <StyledContactContainer>{children}</StyledContactContainer>;
};
const ContactSubText = styled(Text)`
  font-size: 12px;
  font-weight: ${theme.fontWeight[300]};
  text-align: left;
  line-height: 24px;
  width: 100%;
`;

const Border = styled(Box)`
  border-left: 1px dotted ${theme.colors.neutral.md};
  height: 76px;

  ${breakpoints("border-left", "", [{ 900: "none" }])}
  ${breakpoints("border-bottom", "", [
  { 900: `1px dotted ${theme.colors.neutral.md}` },
])}
${breakpoints("width", "", [{ 900: `100%` }])}
${breakpoints("height", "", [{ 900: `auto` }])}
${breakpoints("margin", "", [{ 900: `16px 0` }])}
`;

const StyledLineItem = styled.li`
  background: url(${bullet.src}) no-repeat 0 4px;
  padding-left: 32px;
  margin-bottom: 16px;
`;

const StyledList = styled.ul`
  padding: 0;
  list-style: none;
`;

const LiveChatButtonColumnGrid = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
  margin-bottom: 24px;
  button {
    // Overriding component styles for slightly smaller versions
    padding: 8px 12px;
    line-height: 16px;
  }
`;

const BannerButtonContainer = styled(Box)`
display: flex; flex-alignment: center; margin: 24px 0 0 0;
${breakpoints("flex-direction", "", [{ 640: "column" }])}

a button {
${breakpoints("margin", "", [{ 640: "0" }])}
${breakpoints("margin-bottom", "", [{ 640: "20px" }])}
${breakpoints("width", "", [{ 640: "100%" }])}
}
// TODO: make last button margin bottom 0 on mobile
`
export default function ServerSupport() {
  return (
    <IITLayout subSite="server">
      <Head>
        <title>Remote Desktop Connection & Control Software | 01com.com</title>
        <meta
          name="description"
          content="Remote access software for online meetings, web conferencing software, remote PC access software and remote IT support including help desk software and online training solutions."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IITPageBanner heading="Support">
        <Text textColor={TextColors.White}>
          Contact our knowledgeable staff anytime for immediate assistance.
          Whether you need technical support while operating one of our programs
          or have questions regarding pricing or features of our{" "}
          <StyledLink href="/imintouch-remote-pc-desktop/server/features">
            remote access and remote control software
          </StyledLink>
          , we are available at your convenience.
        </Text>

        <BannerButtonContainer>
          <Link
            href="https://www.01com.com/pdf/I'm%20InTouch-CSE%20Administration%20Features%202.0.pdf"
            target="_blank"
          >
            <PrimaryButton textColor={ButtonTextColors.Blue}>
              Administrator's Guide
            </PrimaryButton>
          </Link>
          <Link
            href="https://www.01com.com/01com/imintouch/webhelp/desktop/Welcome.htm"
            target="_blank"
          >
            <PrimaryButton textColor={ButtonTextColors.Blue}>
              End User's Guide
            </PrimaryButton>
          </Link>
          <Link href="/imintouch-remote-pc-desktop/server/faqs/" target="_blank">
            <SecondaryButton>FAQ</SecondaryButton>
          </Link>
        </BannerButtonContainer>
      </IITPageBanner>
      <PageContentContainer>
        <ContactContainer>
          <Box>
            <ContactSubText>Sales (Toll-Free):</ContactSubText>

            <LiveChatButtonColumnGrid>
              <LiveChatButton variant="pre-sales" />
              <LiveChatButton variant="after-sales" />
            </LiveChatButtonColumnGrid>

            <ContactSubText>Office Hours</ContactSubText>
            <Text variant={TextVariants.Body2}>
              Monday - Friday 9am to 6pm EST
            </Text>
          </Box>
          <Border />

          <Box>
            <ContactSubText>Sales (Toll-Free):</ContactSubText>
            <Box margin="12px 0">
              <Anchor href="tel:1-800-668-2185">1-800-668-2185</Anchor>
            </Box>
          </Box>
          <Border />

          <Box>
            <ContactSubText>Tech Support:</ContactSubText>
            <Box margin="12px 0">
              <Anchor href="tel:905-795-2888">(905) 795-2888</Anchor>
            </Box>
          </Box>
          <Border />

          <Box>
            <ContactSubText>Email:</ContactSubText>
            <Box margin="12px 0">
              <Anchor target="_blank" href="mailto:help@01com.com">help@01com.com</Anchor>
            </Box>
          </Box>
        </ContactContainer>

        <Box margin="48px 0 0 0">
          <StyledContactHeading variant={HeadingVariants.Heading3}>
            System Requirements (server)
          </StyledContactHeading>
          <StyledList>
            <StyledLineItem>
              <Text variant={TextVariants.Body2}>
                Minimum any Intel i3, Intel XEON, AMD Ryzen 3 processor or
                higher
              </Text>
            </StyledLineItem>
            <StyledLineItem>
              <Text variant={TextVariants.Body2}>
                2GB RAM minimum for first 100 users, 64MB per 100 additional
                users
              </Text>
            </StyledLineItem>
            <StyledLineItem>
              <Text variant={TextVariants.Body2}>
                Linux (01 Communique optimized Linux OS supplied during
                installation)
              </Text>
            </StyledLineItem>
            <StyledLineItem>
              <Text variant={TextVariants.Body2}>
                Minimum 9GB SCSI for 100 users. RAID disk array recommended
              </Text>
            </StyledLineItem>
            <StyledLineItem>
              <Text variant={TextVariants.Body2}>
                Minimum T1 Internet (Static IP recommended - Approximately 7.5
                kbps bandwidth required per active remote session. Each 1MB T1
                can accommodate an average of 130 simultaneous remote sessions)
              </Text>
            </StyledLineItem>
          </StyledList>
        </Box>
        <Box margin="48px 0 0 0">
          <StyledContactHeading variant={HeadingVariants.Heading3}>
            System Requirements (host):
          </StyledContactHeading>
          <StyledList>
            <StyledLineItem>
              <Text variant={TextVariants.Body2}>
                Windows Server 2008+, Windows 7, 8, 10, 11
              </Text>
            </StyledLineItem>
            <StyledLineItem>
              <Text variant={TextVariants.Body2}>
                "Always-on" Internet connection
              </Text>
            </StyledLineItem>
            <StyledLineItem>
              <Text variant={TextVariants.Body2}>
                Minimum 1GB free disk space and 2GB RAM
              </Text>
            </StyledLineItem>
            <StyledLineItem>
              <Text variant={TextVariants.Body2}>
                Outlook 2003+ (for Outlook mobilization feature)
              </Text>
            </StyledLineItem>
            <StyledLineItem>
              <Text variant={TextVariants.Body2}>
                Edge, Google Chrome, Firefox
              </Text>
            </StyledLineItem>
            <StyledLineItem>
              <Text variant={TextVariants.Body2}>
                Mobile app access client: I'm InTouch Go for iOS, Android, and
                Windows Tablet
              </Text>
            </StyledLineItem>
          </StyledList>
        </Box>
      </PageContentContainer>
    </IITLayout>
  );
}
