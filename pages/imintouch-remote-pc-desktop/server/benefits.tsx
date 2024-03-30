import Head from "next/head";
import styled from "styled-components";
import Check from "../../../public/assets/check.png";
import Snap from "../../../public/assets/snap.png";
import Scalable from "../../../public/assets/scalable.png";
import Centralized from "../../../public/assets/centralized.png";
import { Box, Text, TextColors, TextVariants } from "../../../components/core";
import { breakpoints } from "../../../utils/breakpoints";
import { IITPageBanner } from "../../../components/im-in-touch/IITPageBanner";
import IITLayout from "../../../components/im-in-touch/IITLayout";
import { FeatureCard } from "../../../components/im-in-touch/IITFeatureCard";
import { Anchor } from "../../../components/core/anchor";
import Link from "next/link";

const FeaturesGrid = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  width: 100%;
  ${breakpoints("grid-template-columns", "", [{ 840: "1fr" }])}
`;

const StyledLink = styled(Link)`
  text-decoration: underline;
`;

export default function ServerBenefits() {
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

      <IITPageBanner heading="Benefits & Advantages">
        <Text textColor={TextColors.White}>Be productive as a company</Text>
        <Text textColor={TextColors.White}>Work efficiently anywhere!</Text>
      </IITPageBanner>
      <Box margin="96px 0">
        <FeaturesGrid>
          <FeatureCard
            title="One-time Purchase Licensing"
            imgSrc={Check.src}
            columns={1}
          >
            <Text variant={TextVariants.Body2}>
              User licenses are a one-time purchase. In other words, there is no
              monthly or annual subscription fee to pay. Learn more by reviewing
              our{" "}
              <StyledLink
                href="https://www.01com.com/pdf/CSE/I'm_InTouch_SE_Technology_White_Paper.pdf"
                target="_blank"
              >
                Technology WhitePaper.
              </StyledLink>
            </Text>
          </FeatureCard>
          <FeatureCard
            title="Highly Scalable"
            imgSrc={Scalable.src}
            columns={1}
          >
            <Text variant={TextVariants.Body2}>
              The I'm InTouch Server Edition creates communications between the
              remote user and the host desktop computer with all the required
              administrative functionalities. Most processing is done at the
              host computer. This unique "Distributed Processing" server
              architecture means that a single server can handle 500 to 2,000
              users, depending on the specific server hardware configuration.
            </Text>
          </FeatureCard>
          <FeatureCard title="Easy Deployment" imgSrc={Snap.src} columns={1}>
            <Text variant={TextVariants.Body2}>
              Install the I'm InTouch Server Edition within your network and
              create user accounts. By entering your employees' or customers'
              email addresses within their account profile, the system will
              automatically send invitation emails to them and prompt them to
              activate their{" "}
              <StyledLink
                href="/imintouch-remote-pc-desktop/server/how-it-works/"
                target="_blank"
              >
                computers for remote access
              </StyledLink>
              . They can simply follow the instructions on the invitation email
              to download and run the I'm InTouch enabling software on their
              computers. Within minutes their computers will become I'm
              InTouch-enabled. Users can then login from any Internet capable
              device and see their computers as if they were sitting in front of
              them. Any computer user can do it easily without training.
            </Text>
          </FeatureCard>
          <FeatureCard
            title="Centralized System Administration"
            imgSrc={Centralized.src}
            columns={1}
          >
            <Text variant={TextVariants.Body2}>
              System administrators can easily add, remove and manage users,
              control user restrictions and view usage reports (refer to{" "}
              <StyledLink
                href="/imintouch-remote-pc-desktop/server/features/"
                target="_blank"
              >
                feature lists
              </StyledLink>
              ). I'm InTouch Server Edition is a cost-effective solution for
              businesses requiring a{" "}
              <StyledLink
                href="/imintouch-remote-pc-desktop/server/features/"
                target="_blank"
              >
                premise-based remote access</StyledLink> software that they can fully manage and control. If
              you would like to do remote access to a single computer or even
              multiple remote desktops in your business but prefer that we
              manage the technology for you, try our{" "}
              <StyledLink
                href="/imintouch-remote-pc-desktop/server/how-it-works/"
                target="_blank"
              >
                I'm InTouch
              </StyledLink>{" "}
              hosted subscription service instead.
            </Text>
          </FeatureCard>
        </FeaturesGrid>
      </Box>
    </IITLayout>
  );
}
