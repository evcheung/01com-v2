import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
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


const PlayButton = styled.button`
  background: none;
  border: none;
`;

const VideoDesktopContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 888px;
  height: 500px;
  margin-top: 32px;
  // override the X button styles inherited from the banner
  button {
    min-width: auto !important;
    padding: 0 !important;
  }

  ${breakpoints("width", "", [{ 1000: "calc(100vw - 64px)" }])}
  ${breakpoints("width", "", [{ 760: "calc(100vw - 32px)" }])}


${breakpoints("height", "", [{ 870: "420px" }])}
${breakpoints("height", "", [{ 760: "380px" }])}
${breakpoints("margin-top", "", [{ 760: "20px" }])}

img {
    ${breakpoints("width", "", [{ 760: "240px" }])}
    ${breakpoints("height", "", [{ 760: "240px" }])}
  }
`;
const StyledHeading = styled(Heading)`
  font-size: 36px;
  text-align: center;
  margin-top: 156px;
`;

const StepsGrid = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 24px;
  margin: 48px 0 96px 0;

  ${breakpoints("grid-template-columns", "", [{ 1000: "1fr" }])}
`;
const BannerSpacingContainer = styled(Box)`
  height: 370px;
  ${breakpoints("height", "", [{ 870: "340px" }])}
  ${breakpoints("height", "", [{ 760: "300px" }])}
`;

const VideoDesktop = () => {
  const [isOpen, setOpen] = useState(false);
  const youtubeThumbnail = "https://i.ytimg.com/vi_webp/tzMxRHmP0s4/0.webp";

  return (
    <BannerSpacingContainer>
      <VideoDesktopContainer backgroundImage={youtubeThumbnail}>
        <ModalVideo
          channel="youtube"
          youtube={{ mute: 0, autoplay: 0 }}
          isOpen={isOpen}
          videoId={"tzMxRHmP0s4"}
          onClose={() => setOpen(false)}
        />
        <PlayButton onClick={() => setOpen(true)}>
          <Image src={playButton} alt="play button" />
        </PlayButton>
      </VideoDesktopContainer>
    </BannerSpacingContainer>
  );
};

const StepCard = styled(Box)`
  background: ${theme.colors.neutral.xs};
  padding: 48px;
  display: flex;
  flex-direction: column;

  ${breakpoints("align-items", "", [{ 1000: "center" }])}

  ${breakpoints("padding", "", [{ 1200: "32px" }])}

p, a {
    ${breakpoints("font-size", "", [{ 1200: "18px" }])}
    ${breakpoints("line-height", "", [{ 1200: "32px" }])}
  }
`;

const StepImage = styled(Image)`
  width: 96px;
  height: 96px;
  ${breakpoints("width", "", [{ 1200: "82px" }])}
  ${breakpoints("height", "", [{ 1200: "82px" }])}
${breakpoints("width", "", [{ 640: "64px" }])}
${breakpoints("height", "", [{ 640: "64px" }])}
`;

const WhiteTextBanner = styled(IOCPageBanner)`
  && {
    color: white;
  }
`;

const StepsContainer = styled(Box)`
  background-color: ${theme.colors.neutral.xs};
  padding: 96px;
  margin: 16px 0;
  display: flex;
  flex-direction: row;       
  justify-content: center;   
  align-items: center;       
  gap: 56px;   
  ${breakpoints("flex-direction", "", [
  { 900: 'column' },
])}
  ${breakpoints("align-items", "", [
  { 900: 'flex-start' },
])}              
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
          <Link href='https://www.01com.com/01com/imintouch/webhelp/desktop/Welcome.htm' target="_blank">
            <PrimaryButton textColor={ButtonTextColors.Green}>
              Buy Now
            </PrimaryButton>
          </Link>
          <Link href='/imintouch-remote-pc-desktop/faqs/'>
            <SecondaryButton>Try it Free</SecondaryButton>
          </Link>
        </Box>
      </IOCPageBanner>

      <StepsContainer>
        <Image src={One.src} alt="Step 1" width={624} height={225.13} />
        <Box>
          <Text variant={TextVariants.Body1} style={{ fontWeight: 400 }}><strong style={{ fontWeight: 700 }}>1.</strong> Login</Text>
          <Text variant={TextVariants.Body2} style={{ marginTop: "16px" }}>
            Go to imoncall.01com.com/login.php. Your agents simply login and wait for a "live chat request". This is similar to how they wait for incoming phone calls.
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
            <StyledLineItem><Text variant={TextVariants.Body2}>Send your customer a request for a temporary remote control session permission</Text></StyledLineItem>
            <StyledLineItem><Text variant={TextVariants.Body2}>Once accepted, your customer's computer screen will appear on the agent's computer</Text></StyledLineItem>
            <StyledLineItem><Text variant={TextVariants.Body2}>The agent can then help resolving issues as if he/she was sitting in front of it</Text></StyledLineItem>
          </StyledList>
        </Box>
      </StepsContainer>
    </IOCLayout>
  );
}
