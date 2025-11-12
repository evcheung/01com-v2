import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";
import ModalVideo from "react-modal-video";
import { useState } from "react";
import playButton from "../../public/assets/play.png";
import One from "../../public/assets/iocstep1.png";
import Two from "../../public/assets/iocstep2.png";
import Three from "../../public/assets/iocstep3.png";
import IOCLayout from "../../components/im-on-call/IOCLayout";
import { IOCPageBanner } from "../../components/im-on-call/IOCPageBanner";
import { theme } from "../../theme";
import Heading from "../../components/core/heading";
import { breakpoints } from "../../utils/breakpoints";
import { Box, ButtonTextColors, PrimaryButton, SecondaryButton, Text, TextColors, TextVariants } from "../../components/core";
import { HeadingVariants } from "../../components/core/heading";
import bullet from '../../public/assets/gbullet.png'
import Link from "next/link";
import { constants } from "buffer";
import { LINKS } from "../../utils/constants";

const StepsContainer = styled(Box)`
  background-color: ${theme.colors.neutral.xs};
  padding: 96px;
  margin: 16px 0;
  display: flex;
  flex-direction: row;       
  justify-content: center;   
  align-items: center;       
  gap: 56px;   

  /* Switch to vertical layout on mobile */
  ${breakpoints("flex-direction", "", [
    { 900: "column" },
  ])}

  /* Center everything when stacked */
  ${breakpoints("align-items", "", [
    { 900: "center" },
  ])}

  ${breakpoints("padding", "", [
    { 900: "48px 32px" },
    { 600: "32px 16px" },
  ])}

  ${breakpoints("gap", "", [
    { 900: "32px" },
    { 600: "24px" },
  ])}

  /* Text always comes first on mobile */
  > div {
    order: 0;
    width: 100%;
    text-align: center; /* centers text for mobile */
    ${breakpoints("text-align", "", [
      { 900: "left" }, /* keep left-aligned on desktop */
    ])}
  }

  /* Image always comes second on mobile */
  img {
    order: 1;
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto; /* centers the image itself */
    ${breakpoints("width", "", [{ 600: "90%" }])}
  }
`;




const StyledLineItem = styled.li`
  background: url(${bullet.src}) no-repeat 0 4px;
  padding-left: 32px;
  margin-bottom: 16px;
`

const StyledList = styled.ul`
padding: 0;
list-style: none;
`

export default function HowItWorks() {
  return (
    <IOCLayout>
      <Head>
        <title>Remote Desktop Connection & Control Software | 01com.com</title>
        <meta
          name="description"
          content="Remote access software for online meetings, web conferencing software, remote PC access software and remote IT support including help desk software and online training solutions."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IOCPageBanner heading="How It Works">
        <Text variant={TextVariants.Body1} textColor={TextColors.White}>The I'm OnCall remote IT support service technology is hosted in our secure data center. You don't need to invest in any expensive new hardware or software. Be our subscriber and you can focus on delivering superb support services to your valuable customers in no time. It is that easy and affordable!</Text>
        <Box flexDirection="row" flexAlignment="center" margin="24px 0 0 0">
          <Link href={LINKS.IOC_BUY_NOW} target="_blank">
            <PrimaryButton textColor={ButtonTextColors.Green}>
              Buy Now
            </PrimaryButton>
          </Link>
          <Link href={LINKS.IOC_TRY_IT_FREE}>
            <SecondaryButton>Try it Free</SecondaryButton>
          </Link>
        </Box>
      </IOCPageBanner>

      <StepsContainer>
        <Image src={One.src} alt="Step 1" width={624} height={225.13} />
        <Box>
          <Text variant={TextVariants.Body1} style={{ fontWeight: 400 }}><strong style={{ fontWeight: 700 }}>1.</strong> Login</Text>
          <Text variant={TextVariants.Body2} style={{ marginTop: "16px" }}>
            Go to <Link href="imoncall.01com.com/login.php" style={{textDecoration:"underline"}}>imoncall.01com.com/login.php.</Link> Your agents simply login and wait for a "live chat request". This is similar to how they wait for incoming phone calls.
          </Text>
        </Box>
      </StepsContainer>
      <StepsContainer>
        <Image src={Two.src} alt="Step 1" width={624} height={201.13} />
        <Box>
          <Text variant={TextVariants.Body1} style={{ fontWeight: 400 }}><strong style={{ fontWeight: 700 }}>2.</strong> Pick Up a Live Chat Request</Text>
          <Text variant={TextVariants.Body2} style={{ marginTop: "16px" }}>
            Similar to picking up a phone call your agents simply pick up pending Live Chat requests and start chatting real-time with the customers. For maximum productivity, an agent can chat with multiple customers at the same time. Incidents can optionally be created to log the support events.
          </Text>
        </Box>
      </StepsContainer>
      <StepsContainer>
        <Image src={Three.src} alt="Step 1" width={624} height={350.83} />
        <Box>
          <Text variant={TextVariants.Body1} style={{ fontWeight: 400 }}><strong style={{ fontWeight: 700 }}>3.</strong> Remote Control</Text>
          <Text variant={TextVariants.Body2} style={{ marginTop: "16px" }}>
            If necessary you can request remote control of your customer's computer:
          </Text>
          <StyledList style={{ marginTop: "24px" }}>
            <StyledLineItem><Text variant={TextVariants.Body2}>Send your customer a request for a <span style={{textDecoration:"underline"}}>temporary remote control session</span> permission</Text></StyledLineItem>
            <StyledLineItem><Text variant={TextVariants.Body2}>Once accepted, your customer's computer screen will appear on the agent's computer</Text></StyledLineItem>
            <StyledLineItem><Text variant={TextVariants.Body2}>The agent can then help resolving issues as if they were sitting in front of it</Text></StyledLineItem>
          </StyledList>
        </Box>
      </StepsContainer>
    </IOCLayout>
  );
}
