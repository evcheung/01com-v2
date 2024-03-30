import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";
import { Box, Text } from "../../../components/core";
import { breakpoints } from "../../../utils/breakpoints";
import { IITPageBanner } from "../../../components/im-in-touch/IITPageBanner";
import IITLayout from "../../../components/im-in-touch/IITLayout";
import Link from "next/link";
import Heading from "../../../components/core/heading";
import {
  FullPageContentContainer,
  PageContentContainer,
} from "../../../components/PageContentContainer";
import One from "../../../public/assets/one-smaller.png";
import Two from "../../../public/assets/two-smaller.png";
import Three from "../../../public/assets/three-smaller.png";
import { theme } from "../../../theme";

const StyledHeading = styled(Heading)`
  line-height: 48px;
  text-align: center;
  margin-bottom: 48px;
`;

const StepsGrid = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 24px;

  ${breakpoints("padding", "", [{ 1470: "0 64px" }])}
  ${breakpoints("padding", "", [{ 860: "0" }])}
  ${breakpoints("grid-template-columns", "", [{ 1470: "1fr" }])}
`;

const StepCard = styled(Box)`
  background: ${theme.colors.neutral.xs};
  padding: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-width: 100%;
  p,
  a {
    font-size: 18px;
    line-height: 32px;
  }
  ${breakpoints("align-items", "", [{ 1000: "center" }])}
  ${breakpoints("padding", "", [{ 640: "32px" }])}
`;

const StepImage = styled(Image)`
  width: 64px;
  height: 64px;
  ${breakpoints("width", "", [{ 740: "48px" }])}
  ${breakpoints("height", "", [{ 740: "48px" }])}
`;

const StyledLink = styled(Link)`
  text-decoration: underline;
`;

const Container = styled(Box)`
  width: 75%;
  margin: 0 auto;
  ${breakpoints("padding", "", [{ 1470: "0 64px" }])}
  ${breakpoints("padding", "", [{ 640: "0" }])}

${breakpoints("width", "", [{ 1200: "100%" }])}
`;

export default function ServerHowItWorks() {
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

      <IITPageBanner heading="How It Works" />
      <FullPageContentContainer>
        <StyledHeading>As easy as 1-2-3!</StyledHeading>
        <Container>
          <StepsGrid>
            <StepCard>
              <StepImage src={One.src} alt="Step 1" width={64} height={64} />
              <Box margin="16px 0 0 0">
                <Text>
                  Install the I'm InTouch Server Edition onto a server machine
                  behind your firewall or within your DMZ (Optimized Linux OS is
                  included in the package). You need to dedicate an IP address
                  pointing to the I'm InTouch server machine - ideally a static
                  IP address with an URL such as e.g.
                  www.imintouch.mycompany.com.
                </Text>
              </Box>
            </StepCard>
            <StepCard>
              <StepImage src={Two.src} alt="Step 2" width={64} height={64} />
              <Box margin="16px 0 0 0">
                <Text>
                  Create user accounts using the Administration Tools.
                </Text>
              </Box>
            </StepCard>
            <StepCard>
              <StepImage src={Three.src} alt="Step 3" width={64} height={64} />
              <Box margin="16px 0 0 0">
                <Text>
                  Owners of the user accounts will receive an activation email.
                  All they have to do is to follow the simple instructions on
                  the email to install the I'm InTouch enabling software onto
                  the computer that they want to remotely access. Thereafter the
                  computer will become I'm InTouch-enabled.
                </Text>
              </Box>
            </StepCard>
          </StepsGrid>
          <Box margin="48px 0 0 0">
            <Text>
              Now owners of the I'm InTouch-enabled computers can remotely
              access their computers from virtually any Internet connected
              devices via a company web page that the system administrator
              defines during the server installation in step #1 above. The I'm
              InTouch server then creates a secure encrypted connection between
              the I'm InTouch-enabled computer and the accessing device.
            </Text>
          </Box>
          <Box margin="24px 0">
            <Text>
              Click the{" "}
              <StyledLink
                href="/imintouch-remote-pc-desktop/server/features/"
                target="_blank"
              >
                Features
              </StyledLink>{" "}
              page to learn more about the remote access features and the system
              administration/reporting tools.
            </Text>
          </Box>
          <Box margin="24px 0">
            <Text>
              For more information about the I'm InTouch Server Edition,
              download the following: {" "}
              <StyledLink
                target="_blank"
                href="https://www.01com.com/pdf/CSE/I'm_InTouch_SE_Technology_White_Paper.pdf"
              >
                Technology White Paper</StyledLink>,{" "}
              <StyledLink
                href="https://www.01com.com/pdf/CSE/I'm_InTouch_SE_Security_Whitepaper.pdf"
                target="_blank"
              >
                Security White Paper{" "}
              </StyledLink>{" "}
            </Text>
          </Box>
        </Container>
      </FullPageContentContainer>
    </IITLayout>
  );
}
