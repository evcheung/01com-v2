import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";
import Activation from "../../../public/assets/securekey-activation.jpg"
import { Box, Text } from "../../../components/core";
import { breakpoints } from "../../../utils/breakpoints";
import { IITPageBanner } from "../../../components/im-in-touch/IITPageBanner";
import IITLayout from "../../../components/im-in-touch/IITLayout";
import Link from "next/link";
import Heading from "../../../components/core/heading";
import { PageContentContainer } from "../../../components/PageContentContainer";

const StyledLink = styled(Link)`
  text-decoration: underline;
`;

const StyledImage = styled(Image)`
width: 400px;
max-width: 35%;
height: auto;
${breakpoints("max-width", "", [
  { 1080: "80%" },
])}
${breakpoints("max-width", "", [
  { 840: "100%" },
])}
`
const StyledHeading = styled(Heading)`
line-height: 48px;
`

const Container = styled(Box)`
margin: 16px 0 0 0;
display: flex;
align-items: flex-start;
${breakpoints("flex-direction", "", [
  { 1080: "column" },
])}
`
export default function SecureKeyHowItWorks() {
  return (
    <IITLayout subSite="gomail">
      <Head>
        <title>Remote Desktop Connection & Control Software | 01com.com</title>
        <meta
          name="description"
          content="Remote access software for online meetings, web conferencing software, remote PC access software and remote IT support including help desk software and online training solutions."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IITPageBanner heading="How It Works" />
      <PageContentContainer>
        <StyledHeading>Activation</StyledHeading>
        <Container>
          <Box margin="0 48px 0 0" >
            <Text>
              Insert your I'm InTouch SecureKEY into your I'm InTouch-enabled
              computer. An activation screen will automatically be displayed.
              Click "Start" to begin the activation process. When activation is
              done your I'm InTouch SecureKEY will be "uniquely registered with
              your I'm InTouch-enabled computer. In other words, no two I'm
              InTouch SecureKEYs are the same. After a successful activation you
              can safely remove your I'm InTouch SecureKEY and use it as your
              physical authentication device when you want to{" "}
              <StyledLink
                target="_blank"
                href="/imintouch-remote-pc-desktop/features/remote-control//"
              >
                remotely access
              </StyledLink>{" "}
              your I'm InTouch-enabled computer. See{" "}
              <StyledLink
                target="_blank"
                href="imintouch-remote-pc-desktop/faqs#security/"
              >
                Physical Authentication FAQs
              </StyledLink>{" "}
              for more details.
            </Text>
            <Box margin="24px 0">
              <Text>
                Optionally, I'm InTouch SecureKEY can be configured to remember your
                login password to give you a speedy connection if you have enabled
                "Auto-login" during activation.
              </Text>
            </Box>
          </Box>

          <StyledImage src={Activation.src} width={100} height={100} alt="SecureKey Activation screen"></StyledImage>
        </Container>

        <Box margin="48px 0">
          <StyledHeading>What if I have lost my I'm InTouch SecureKEY?</StyledHeading>
          <Box margin="16px 0">
            <Text>
              Simply block the SecureKEY feature by logging into your I'm InTouch
              account and go to the "Physical Authentication" page. When you have
              received a new I'm InTouch SecureKEY you may re-activate it
              following the same activation steps. Since your old I'm InTouch
              SecureKEY has been "removed" from the I'm InTouch system, you can
              therefore log into your I'm InTouch account and safely re-enable the
              SecureKEY feature.
            </Text>
          </Box>
          <Box margin="24px 0">
            <Text>
              Optionally, I'm InTouch SecureKEY can be configured to remember your
              login password to give you a speedy connection if you have enabled
              "Auto-login" during activation.
            </Text>
          </Box>
        </Box>
      </PageContentContainer>
    </IITLayout>
  );
}
