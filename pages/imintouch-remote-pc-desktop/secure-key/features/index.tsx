import Head from "next/head";
import styled from "styled-components";
import { Box, Text } from "../../../../components/core";
import { breakpoints } from "../../../../utils/breakpoints";
import { IITPageBanner } from "../../../../components/im-in-touch/IITPageBanner";
import IITLayout from "../../../../components/im-in-touch/IITLayout";
import { theme } from "../../../../theme";
import Image from "next/image";
import Link from "next/link";
import { PageContentContainer } from "../../../../components/PageContentContainer";

const FeaturesGrid = styled(Box)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  width: 100%;
`;

const FeatureCard = styled(Box)`
  background: ${theme.colors.neutral.xs};
  width: 100%;
  padding: 48px;
  display: flex;
  align-items: center;
  > div {
    margin: 0 0 0 48px;
    ${breakpoints("margin", "", [{ 620: "36px 0 0 0" }])}
  }

  ${breakpoints("flex-direction", "", [{ 620: "column" }])}
  ${breakpoints("align-items", "", [{ 620: "flex-start" }])}
${breakpoints("padding", "", [{ 1180: "32px 24px" }])}
  ${breakpoints("padding", "", [{ 900: "32px 24px" }])}
`;
const StyledImage = styled(Image)`
  width: 242px;
  height: auto;
`;

const StyledLink = styled(Link)`
  text-decoration: underline;
`;

const Bolded = styled.span`
font-weight: 600;
`;

export default function SecureKEYFeaturesHome() {
  return (
    <IITLayout subSite="securekey">
      <Head>
        <title>Remote Desktop Connection & Control Software | 01com.com</title>
        <meta
          name="description"
          content="Remote access software for online meetings, web conferencing software, remote PC access software and remote IT support including help desk software and online training solutions."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IITPageBanner heading="Features" />
      <PageContentContainer>
        <Box margin="16px 0 0 0">
          <Text>
            I'm InTouch SecureKEY is a powerful <Bolded>physical authentication</Bolded> device
            uniquely activated with your <StyledLink
              target="_blank"
              href="/imintouch-remote-pc-desktop/features/"
            >I'm InTouch-enabled</StyledLink> computer. Only a
            computer with your I'm InTouch SecureKEY in the USB slot can access
            your I'm InTouch-enabled computer in addition to the password
            protection. Chances of any unauthorized access is thus minimized.
          </Text>
        </Box>
        <Box margin="16px 0 0 0">
          <Text>
            <Bolded>Auto-Login</Bolded> can be enabled to allow controlling your I'm InTouch-enabled
            computer remotely within seconds of inserting the I'm InTouch
            SecureKEY.
          </Text>
        </Box>
        <Box margin="16px 0 0 0">
          <Text>
            As a free bonus I'm InTouch SecureKEY can also be used as a <Bolded>1GB USB </Bolded>
            storage drive.
          </Text>
        </Box>
      </PageContentContainer>
    </IITLayout>
  );
}
